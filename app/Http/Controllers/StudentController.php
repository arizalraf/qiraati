<?php

namespace App\Http\Controllers;

use App\Enums\StudentGender;
use App\Http\Resources\GradeSingleResource;
use App\Http\Resources\StudentResource;
use App\Http\Resources\TeacherResource;
use App\Models\Grade;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class StudentController extends Controller
{
    use HasFile;
    public function index(Request $request):Response
    {
        $students=Student::query()->with(['user','teacher','grade'])
        ->when(request()->search,function($query,$value){
            return $query->whereHas('user',function($subQuery)use($value){
                $subQuery->where('name','REGEXP',$value);
            });
            
        })
        ->when(request()->field && request()->direction,function($query){
            return $query->join('users','students.user_id','=','users.id')
           

            ->orderBy('users.name',request()->direction);
            
        })
        ->paginate(request()->load ?? 10);
        
        

        return inertia('Students/Index',[
            "students"=>fn()=>StudentResource::collection($students)->additional([
                "meta"=>[
                    "has_pages"=>$students->hasPages(),
                ]
            ]),
            "page_settings"=>[
                "title"=>'Siswa',
                "subtitle"=>'Daftar Nama Siswa'
            ],
            "state"=>[
                "page"=>request()->page ?? 1,
                "search"=>request()->search ?? '',
                "load"=>10,
            ]
        ]);

    }
    public function create():Response
    {
        return inertia(component:'Students/Create',props:[
            'teachers'=>fn()=>Teacher::select('teachers.id','users.name')->with('user')->join('users','users.id','=','teachers.user_id')->where('users.role','Guru')->get(),
            'grades'=>fn()=>Grade::query()->get(),
            'page_setting'=>[
            'title'=> 'Tambah Data Siswa',
            'subtitle'=> 'Isikan Form di Bawah ini Untuk Menambah Data Siswa',
            'method'=>'POST',
            'action'=>route('students.store'),
            ],
            'genders'=>StudentGender::options(),
        ]);

    }
   

    public function store(Request $request):RedirectResponse
    {
       
        User::create([
            "name"=>$name=$request->name,
            "username"=>$request->name,
            "email"=>$request->email,
            "password"=>$request->password,
            "avatar"=>$this->upload_file($request,'avatar','users/avatar'),
            "role"=>'Siswa',
        ]);
        $user=User::query()->where('email',$request->email)->first();
       
        Student::create([
            "user_id"=>$user->id,
            "grade_id"=>$request->grade,
            "teacher_id"=>$request->teacher,
            "nisn"=>$request->nisn,
            'slug'=>str()->slug($name.str()->uuid(10)),
            'gender'=>$request->gender,
            'place_birth'=>$request->place_birth,
            'date_birth'=>$request->date_birth,
            'religion'=>$request->religion,
            'previous_education'=>$request->previous_education,
            'address'=>$request->address,
            'father_name'=>$request->father_name,
            'mother_name'=>$request->mother_name,
            'father_occupation'=>$request->father_occupation,
            'mother_occupation'=>$request->mother_occupation,
            'parent_address'=>$request->parent_address,
        ]);
        
           flashMessage('Data Siswa Berhasil di Simpan');
           return to_route('students.index');
    
    }
}

<?php

namespace App\Http\Controllers;

use App\Enums\StudentGender;
use App\Http\Requests\TeacherRequest;
use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use App\Models\User;
use App\Traits\HasFile;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;

class TeacherController extends Controller
{
    use HasFile;
    public function index(Request $request):Response
    {
        $teachers=Teacher::query()->with('user')
        ->when(request()->search,function($query,$value){
            return $query->whereHas('user',function($subQuery)use($value){
                $subQuery->where('name','REGEXP',$value);
            });
            
        })
        ->when(request()->field && request()->direction,function($query){
            return $query->join('users','teachers.user_id','=','users.id')
            ->orderBy('users.name',request()->direction);
            
        })
        ->paginate(request()->load ?? 10);
        
        

        return inertia('Teacher/Index',[
            "teachers"=>fn()=>TeacherResource::collection($teachers)->additional([
                "meta"=>[
                    "has_pages"=>$teachers->hasPages(),
                ]
            ]),
            "page_settings"=>[
                "title"=>'Guru',
                "subtitle"=>'Daftar Nama Guru'
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
        return inertia(component:'Teacher/Create',props:[
            'page_setting'=>[
            'title'=> 'Tambah Data Guru',
            'subtitle'=> 'Isikan Form di Bawah ini Untuk Menambah Data Guru',
            'method'=>'POST',
            'action'=>route('teachers.store'),
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
            "role"=>'Guru',
        ]);
        $user=User::query()->where('email',$request->email)->first();
       
        Teacher::create([
            "user_id"=>$user->id,
            "nip"=>$request->nip,
            'slug'=>str()->slug($name.str()->uuid(10)),
            'gender'=>$request->gender,
            'place_birth'=>$request->place_birth,
            'date_birth'=>$request->date_birth,
            'religion'=>$request->religion,
            'address'=>$request->address,
            'education'=>$request->education
        ]);
        
           flashMessage('Data Guru Berhasil di Simpan');
           return to_route('teachers.index');
    
    }
}

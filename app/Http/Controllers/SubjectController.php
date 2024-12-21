<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubjectRequest;
use App\Http\Resources\SubjectResource;
use App\Models\Subject;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SubjectController extends Controller
{
    public function index():Response
    {
        $subjects=Subject::query()
        ->when(request()->search,function($query,$value){
            return $query->where('name','REGEXP',$value);
            
        })
        ->when(request()->field && request()->direction,function($query){
            return $query->orderBy('name',request()->direction);
            
        })
        ->paginate(request()->load ?? 5);

        return inertia('Subjects/Index',[
            "subjects"=>fn()=>SubjectResource::collection($subjects)->additional([
                "meta"=>[
                    "has_pages"=>$subjects->hasPages(),
                ]
            ]),
            "page_settings"=>[
                "title"=>'Mata Pelajaran',
                "subtitle"=>'Daftar Mata Pelajaran'
            ],
            "state"=>[
                "page"=>request()->page ?? 1,
                "search"=>request()->search ?? '',
                "load"=>5,
            ]
        ]);
    }
    public function create():Response
    {
        return inertia(component:'Subjects/Create',props:[
            'page_setting'=>[
            'title'=> 'Tambah Data Mata Pelajaran',
            'subtitle'=> 'Isikan Form di Bawah ini Untuk Menambah Data Mata Pelajaran',
            'method'=>'POST',
            'action'=>route('subjects.store'),
            ],
        ]);

    }
   

    public function store(SubjectRequest $request):RedirectResponse
    {
       
        Subject::create([
            "name"=>$request->name,
        ]);
        
        
           flashMessage('Data Mata Pelajaran Berhasil di Simpan');
           return to_route('subjects.index');
    
    }
}

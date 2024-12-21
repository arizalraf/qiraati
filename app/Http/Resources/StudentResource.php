<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        return [
            'id'=>$this->id,
            'user_id'=>$this->user_id,
            'teacher'=>$this->teacher_id,
            'grade_id'=>$this->grade_id,
            'nisn'=>$this->nisn,
            'slug'=>$this->slug,
            'gender'=>$this->gender,
            'place_birth'=>$this->place_birth,
            'date_birth'=>$this->date_birth,
            'religion'=>$this->religion,
            'previous_education'=>$this->previous_education,
            'address'=>$this->address,
            'father_name'=>$this->father_name,
            'mother_name'=>$this->mother_name,
            'father_occupation'=>$this->father_occupation,
            'mother_occupation'=>$this->mother_occupation,
            'parent_address'=>$this->parent_address,
            'created_at'=>$this->created_at->format('d M Y'),
            "user"=>new UserSingleResource($this->user),
            "teacher"=>new TeacherResource($this->teacher),
            "grade"=>new GradeSingleResource($this->grade),
        ];
    }
}

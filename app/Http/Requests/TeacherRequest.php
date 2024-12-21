<?php

namespace App\Http\Requests;

use App\Enums\StudentGender;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;

class TeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name"=>['string','max:255','required'],
            "email"=>['string','max:256','required'],
            "password"=>['string','required','min:9'],
            "avatar"=>[
                Rule::when($this->routeIs('teachers.store'),['required','mimes:png,jpg','max:2048']),
                // Rule::when($this->routeIs('teachers.update'),['nullable','mimes:png,jpg','max:2048']),
            ],
            "nip"=>['required','string','max:15'],
            "gender"=>[
                'nullable',
                new Enum(StudentGender::class),
            ],
            "place_brith"=>['required',"max:50","string"],
            "date_brith"=>['required','date'],
            "religion"=>['required','string'],
            "address"=>['required','max:256','string'],
            "education"=>['required','string']
        ];
    }
    public function attribute():array
    {
        return [
            'name'=>'Name',
            'email'=>'Email',
            'password'=>'Password',
            'avatar'=>'Avatar',
            "nip"=>'NIP',
            "gender"=>"Gender",
            "place_brith"=>"Place Birth",
            "date_brith"=>"Date Birth",
            "religion"=>"Religion",
            "address"=>"Address",
            "education"=>"Education"
        ];
    }

}

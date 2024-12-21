import HeaderForm from '@/Components/HeaderForm';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import AppLayout from '@/Layouts/AppLayout';
import { flashMessage } from '@/lib/utils';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';

export default function Create({ page_setting, genders, teachers, grades }) {
    const { data, setData, processing, reset, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        avatar: '',
        nisn: '',
        teacher: '',
        grade: '',
        gender: 'LAKI',
        place_birth: '',
        date_birth: '',
        religion: '',
        previous_education: '',
        address: '',
        father_name: '',
        mother_name: '',
        father_occupation: '',
        mother_occupation: '',
        parent_address: '',
        _method: page_setting.method,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();
        post(page_setting.action, {
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <>
            <div className="space-y-10 divide-y divide-dashed divide-gray-900/10">
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3">
                    <HeaderForm className="mb-8" title={page_setting.title} subtitle={page_setting.subtitle} />
                    <Card className="md:col-span-2">
                        <CardContent>
                            <form onSubmit={onHandleSubmit}>
                                <div className="py-6">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="name" value="Name" />
                                            <TextInput
                                                type="text"
                                                name="name"
                                                id="name"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.name]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.name && <InputError message={errors.name} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="email" value="Email" />
                                            <TextInput
                                                type="email"
                                                name="email"
                                                id="email"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.email]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.email && <InputError message={errors.email} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="passsword" value="Password" />
                                            <TextInput
                                                type="password"
                                                name="password"
                                                id="password"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.password]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.password && <InputError message={errors.password} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="avatar" value="Avatar" />
                                            <TextInput
                                                type="file"
                                                name="avatar"
                                                id="avatar"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.name]: e.target.files[0] }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.files[0])}
                                                onErrors={errors.avatar && <InputError message={errors.avatar} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="nisn" value="NISN" />
                                            <TextInput
                                                type="text"
                                                name="nisn"
                                                id="nisn"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.nisn]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.nisn && <InputError message={errors.nisn} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="teacher" value="teacher" />
                                            <Select
                                                defaultValue="Pilih Wali Kelas"
                                                onValueChange={(value) => setData('teacher', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {teachers.find((teacher) => teacher.id == data.teacher)?.name ??
                                                            'Pilih Wali Kelas'}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {teachers.map((teacher, index) => (
                                                        <SelectItem key={index} value={teacher.id}>
                                                            {teacher.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.teacher && <InputError message={errors.teacher} />}
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="grade" value="grade" />
                                            <Select
                                                defaultValue="Pilih Kelas"
                                                onValueChange={(value) => setData('grade', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {grades.find((grade) => grade.id == data.grade)?.name ??
                                                            'Pilih Kelas'}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {grades.map((grade, index) => (
                                                        <SelectItem key={index} value={grade.id}>
                                                            {grade.name}-{grade.semester}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.grade && <InputError message={errors.grade} />}
                                        </div>

                                        <div className="col-span-full">
                                            <InputLabel htmlFor="gender" value="gender" />
                                            <Select
                                                defaultValue="Pilih Jenis Kelamin"
                                                onValueChange={(value) => setData('gender', value)}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue>
                                                        {genders.find((gender) => gender.value == data.gender)?.label ??
                                                            'Pilih Jenis Kelamin'}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {genders.map((gender, index) => (
                                                        <SelectItem key={index} value={gender.value}>
                                                            {gender.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.gender && <InputError message={errors.gender} />}
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="place_birth" value="Tempat Lahir" />
                                            <TextInput
                                                type="text"
                                                name="place_birth"
                                                id="place_birth"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.place_birth]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.place_birth && <InputError message={errors.place_birth} />
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="date_birth" value="Tanggal Lahir" />
                                            <TextInput
                                                type="date"
                                                name="date_birth"
                                                id="date_birth"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.date_birth]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.date_birth && <InputError message={errors.date_birth} />
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="religion" value="Agama" />
                                            <TextInput
                                                type="text"
                                                name="religion"
                                                id="religion"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.religion]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.religion && <InputError message={errors.religion} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="previous_education" value="Pendidikan Sebelumnya" />
                                            <TextInput
                                                type="text"
                                                name="previous_education"
                                                id="previous_education"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.previous_education]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.previous_education && (
                                                        <InputError message={errors.previous_education} />
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="address" value="Alamat" />
                                            <TextInput
                                                type="text"
                                                name="address"
                                                id="address"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.address]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.address && <InputError message={errors.address} />}
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="father_name" value="Nama Ayah" />
                                            <TextInput
                                                type="text"
                                                name="father_name"
                                                id="father_name"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.father_name]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.father_name && <InputError message={errors.father_name} />
                                                }
                                            />
                                        </div>

                                        <div className="col-span-full">
                                            <InputLabel htmlFor="mother_name" value="Nama Ibu" />
                                            <TextInput
                                                type="text"
                                                name="mother_name"
                                                id="mother_name"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.mother_name]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.mother_name && <InputError message={errors.mother_name} />
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="father_occupation" value="Pekerjaan Ayah" />
                                            <TextInput
                                                type="text"
                                                name="father_occupation"
                                                id="father_occupation"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.father_occupation]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.father_occupation && (
                                                        <InputError message={errors.father_occupation} />
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="mother_occupation" value="Pekerjaan Ibu" />
                                            <TextInput
                                                type="text"
                                                name="mother_occupation"
                                                id="mother_occupation"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.mother_occupation]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.mother_occupation && (
                                                        <InputError message={errors.mother_occupation} />
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <InputLabel htmlFor="parent_address" value="Alamat Orang Tua" />
                                            <TextInput
                                                type="text"
                                                name="parent_address"
                                                id="parent_address"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.parent_address]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={
                                                    errors.parent_address && (
                                                        <InputError message={errors.parent_address} />
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-x-2 py-6">
                                    <Button type="button" variant="ghost" onClick={() => reset()}>
                                        Reset
                                    </Button>
                                    <Button type="submit" variant="red" disabled={processing}>
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
Create.layout = (page) => <AppLayout children={page} title="Tambah Data Siswa" />;

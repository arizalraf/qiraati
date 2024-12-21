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

export default function Create({ page_setting, genders }) {
    const { data, setData, processing, reset, post, errors } = useForm({
        name: '',
        email: '',
        password: '',
        avatar: '',
        nip: '',
        gender: 'LAKI',
        place_birth: '',
        date_birth: '',
        religion: '',
        address: '',
        education: '',
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
                                            <InputLabel htmlFor="nip" value="Nip" />
                                            <TextInput
                                                type="text"
                                                name="nip"
                                                id="nip"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.nip]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.nip && <InputError message={errors.nip} />}
                                            />
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
                                            <InputLabel htmlFor="education" value="Pendidikan Terakhir" />
                                            <TextInput
                                                type="text"
                                                name="education"
                                                id="education"
                                                // onChange={(e) =>
                                                //     setData((data) => ({ ...data, [e.target.education]: e.target.value }))
                                                // }//cara pertama
                                                onChange={(e) => setData(e.target.name, e.target.value)}
                                                onErrors={errors.education && <InputError message={errors.education} />}
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
Create.layout = (page) => <AppLayout children={page} title="Tambah Data Guru" />;

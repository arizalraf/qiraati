import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { PiChalkboardTeacher, PiHouse, PiLockKeyOpen, PiSquaresFour, PiSticker, PiUser } from 'react-icons/pi';

export default function SidebarResponsive({ auth, url }) {
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 dark:bg-gray-900">
            <div className="flex h-16 shrink-0 items-center space-x-1.5">
                <Link href="/" className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter">
                    Plannify<span className="text-red-500">.</span>
                </Link>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {/* menu */}
                            <li>
                                <Link
                                    href={route('dashboard')}
                                    className={cn(
                                        url.startsWith('/dashboard')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiHouse
                                        className={cn(
                                            url.startsWith('/dashboard') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('students.index')}
                                    className={cn(
                                        url.startsWith('/students')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiUser
                                        className={cn(
                                            url.startsWith('/students') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Siswa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('teachers.index')}
                                    className={cn(
                                        url.startsWith('/teachers')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiChalkboardTeacher
                                        className={cn(
                                            url.startsWith('/teachers') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Guru
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('grades.index')}
                                    className={cn(
                                        url.startsWith('/grades')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiSticker
                                        className={cn(
                                            url.startsWith('/grades') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Kelas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('subjects.index')}
                                    className={cn(
                                        url.startsWith('/subjects')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiSquaresFour
                                        className={cn(
                                            url.startsWith('/subjects') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Mata Pelajaran
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className={cn(
                                        url.startsWith('/logout')
                                            ? 'bg-red-500 text-white'
                                            : 'text-foreground hover:bg-gray-100',
                                        'group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                                    )}
                                >
                                    <PiLockKeyOpen
                                        className={cn(
                                            url.startsWith('/logout') ? 'text-white' : 'text-foreground',
                                            'h-6 w-6 shrink-0',
                                        )}
                                    />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

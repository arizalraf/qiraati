import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export const SEMESTER = {
    SEMESTER_SATU: 'Semester Satu',
    SEMESTER_DUA: 'Semester Dua',
};
export const ACHIEVEMENT = {
    NAIK_KELAS: 'Naik Kelas',
    TINGGAL_KELAS: 'Tinggal Kelas',
    SEMESTER_SATU: 'Semester Satu',
};
export function flashMessage(params) {
    return params.props.flash_message;
}

import { Badge } from '@/Components/ui/badge';
import { ACHIEVEMENT } from '@/lib/utils';

export default function GetStatusBadge({ achievement }) {
    const { NAIK_KELAS, TINGGAL_KELAS, SEMESTER_SATU } = ACHIEVEMENT;
    let badge, text;

    switch (achievement) {
        case TINGGAL_KELAS:
            badge = 'bg-red-500 hover:bg-red-600';
            text = TINGGAL_KELAS;
            break;
        case NAIK_KELAS:
            badge = 'bg-green-500 hover:bg-green-600';
            text = NAIK_KELAS;
            break;
        default:
            badge = '';
            text = SEMESTER_SATU;
    }
    return <Badge className={badge}>{text}</Badge>;
}

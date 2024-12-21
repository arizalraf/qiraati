import { Badge } from '@/Components/ui/badge';
import { SEMESTER } from '@/lib/utils';

export default function GetPriorityBadge({ semester }) {
    const { SEMESTER_SATU, SEMESTER_DUA } = SEMESTER;
    let badge, text;

    switch (semester) {
        case SEMESTER_SATU:
            badge = 'bg-yellow-500 hover:bg-yellow-600';
            text = SEMESTER_SATU;
            break;
        case SEMESTER_DUA:
            badge = 'bg-blue-500 hover:bg-blue-600';
            text = SEMESTER_DUA;
            break;
    }
    return <Badge className={badge}>{text}</Badge>;
}

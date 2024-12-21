import { router } from '@inertiajs/react';
import { debounce, pickBy } from 'lodash';
import { useCallback, useEffect } from 'react';

export function UseFilter({ route, values, only, wait = 300 }) {
    const reload = useCallback(
        debounce((query) => {
            router.get(route, pickBy(query), {
                only: only,
                preserveScroll: true,
                preserveState: true,
            });
        }, wait),
        [],
    );
    useEffect(() => reload(values), [values, reload]);
    return { values };
}

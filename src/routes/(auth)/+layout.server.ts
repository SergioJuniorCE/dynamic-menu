import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    if (locals.user) {
        return redirect(302, '/dashboard')
    }
    return {};
}) satisfies LayoutServerLoad;
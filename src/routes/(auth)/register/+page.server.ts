import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { userRegistrationSchema } from './schema';

export const load = (async () => {
    return {
        form: await superValidate(zod(userRegistrationSchema)),
    };
}) satisfies PageServerLoad;
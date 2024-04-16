import type { PageServerLoad } from './$types';
import { db } from '$lib/db/db.server';
import { restaurantsTable } from '$lib/db/schema';

export const load = (async () => {
    return {
        restaurants: await db.select().from(restaurantsTable).orderBy(restaurantsTable.name),
    }
}) satisfies PageServerLoad;
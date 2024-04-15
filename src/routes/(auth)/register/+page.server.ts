import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { zod } from 'sveltekit-superforms/adapters';
import { userRegistrationSchema } from './schema';
import { Argon2id } from 'oslo/password';
import { generateId } from 'lucia';
import { db } from '$lib/db/db.server.js';
import { usersTable } from '$lib/db/schema.js';
import { eq } from 'drizzle-orm';
import { lucia } from '$lib/server/auth.js';

export const load = (async () => {
    return {
        form: await superValidate(zod(userRegistrationSchema)),
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(userRegistrationSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        const { email, password } = form.data;

        const userId = generateId(15);
        const passwordHash = await new Argon2id().hash(password);

        const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1)

        if (user) {
            return fail(400, {
                form: {
                    ...form,
                    errors: {
                        email: 'Este usuario ya existe. Si olvidaste tu contraseña, puedes recuperarla en la página de inicio de sesión.',
                    },
                },
            });
        }

        await db.insert(usersTable).values({
            id: userId,
            email,
            password_hash: passwordHash,
        })

        const session = await lucia.createSession(userId, {})
        const sessionCookie = await lucia.createSessionCookie(session.id)
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: '.',
            ...sessionCookie.attributes,
        })

        return redirect(302, '/')
    },
};
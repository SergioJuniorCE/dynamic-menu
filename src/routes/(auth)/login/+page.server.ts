import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { zod } from 'sveltekit-superforms/adapters';
import { userLoginSchema } from './schema.js';
import { Argon2id } from 'oslo/password';
import { db } from '$lib/db/db.server.js';
import { usersTable } from '$lib/db/schema.js';
import { eq } from 'drizzle-orm';
import { lucia } from '$lib/server/auth.js';

export const load = (async () => {
    return {
        form: await superValidate(zod(userLoginSchema)),
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async (event) => {
        try {
            const form = await superValidate(event, zod(userLoginSchema));
            if (!form.valid) {
                console.log('skill issue')
                return fail(400, {
                    form,
                });
            }
    
            const { email, password } = form.data;
    
            const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1)
    
    
            if (!user) {
                console.log('El crreo no exsitse')
                return fail(400, {
                    form: {
                        ...form,
                        errors: {
                            email: 'El usuario no existe',
                        },
                    }
                });
            }
    
            const validPassword = await new Argon2id().verify(user.password_hash, password);
    
            if (!validPassword) {
                return fail(400, {
                    form: {
                        ...form,
                        errors: {
                            password: 'La contraseña es incorrecta',
                        },
                    },
                });
            }
    
            const session = await lucia.createSession(user.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
    
            return redirect(302, "/restaurants");
        } catch (error) {
            console.error(error);
            return fail(500, {
                form: {
                    errors: {
                        email: 'Error inesperado',
                    },
                },
            });
        }
    },
};
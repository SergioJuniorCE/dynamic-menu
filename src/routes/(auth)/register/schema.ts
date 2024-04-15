import { z } from "zod";

export const userRegistrationSchema = z.object({
  email: z.string().min(1, {
    message: "El correo es requerido",
  }).email({
    message: "El correo no es válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña es requerida",
  }),
  passwordConfirmation: z.string().min(6, {
    message: "La confirmación de la contraseña es requerida",
  }),
}).superRefine(({ password, passwordConfirmation }, ctx) => {
  if (password !== passwordConfirmation) {
    ctx.addIssue({
      code: "custom",
      message: "Las contraseñas no coinciden",
    });
  }
})

export type UserRegistrationSchema = typeof userRegistrationSchema;
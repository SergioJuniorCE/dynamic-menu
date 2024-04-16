import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().min(1, {
    message: "El correo es requerido",
  }).email({
    message: "El correo no es válido",
  }),
  password: z.string().min(6, {
    message: "La contraseña es requerida",
  }),
})

export type UserLoginSchema = typeof userLoginSchema;
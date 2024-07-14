import * as z from "zod"


export const SettingsSchema = z.object({
    name: z.optional(z.string())
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "email is required"
    }),
    password: z.string().min(1,{
        message: "password is required",
    }),
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "email is required"
    }),
    password: z.string().min(6,{
        message: "minimum six vharacters required ",
    }),
    name: z.string().min(1,{
        message: "name is required ",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum of 6 characters required"
    }),
});
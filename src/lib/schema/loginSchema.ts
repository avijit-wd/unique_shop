import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters long" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

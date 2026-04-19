import { z } from "zod";

const optionalPublicUrl = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().url().optional(),
);

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: optionalPublicUrl,
  NEXT_PUBLIC_CONTACT_FORM_URL: optionalPublicUrl,
  NEXT_PUBLIC_REGISTER_FORM_URL: optionalPublicUrl,
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates environment variables at runtime. Import and call where env is needed
 * (e.g. in API routes, server components). Extend the schema when adding Clerk, Convex, etc.
 */
export function getEnv(): Env {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CONTACT_FORM_URL: process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
    NEXT_PUBLIC_REGISTER_FORM_URL: process.env.NEXT_PUBLIC_REGISTER_FORM_URL,
  });

  if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

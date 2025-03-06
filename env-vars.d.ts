import { z } from "zod"

const envSchema = z.object({
    BASE_URL: z.string(),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
})

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> { }
    }
}
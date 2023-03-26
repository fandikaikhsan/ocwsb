declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    PUBLIC_URL: string
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_SITE_KEY: string
  }
}

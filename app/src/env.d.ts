/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SENTRY_DSN: string | undefined
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

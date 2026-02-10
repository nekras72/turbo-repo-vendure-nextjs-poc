export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_ENV?: string;
      COOKIE_SECRET?: string;
      SUPERADMIN_USERNAME?: string;
      SUPERADMIN_PASSWORD?: string;
      PORT?: string;
    }
  }
}

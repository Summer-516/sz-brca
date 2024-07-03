// const { VITE_API_PATH } = import.meta.env;
const { VITE_API_PATH } = (import.meta as any).env;
export const baseUrlApi = (url: string) =>
  process.env.NODE_ENV === "development"
    ? `/api${url}`
    : `${VITE_API_PATH}${url}`;

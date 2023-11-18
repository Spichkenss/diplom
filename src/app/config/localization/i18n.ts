import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../../../../public/translations/${locale}.json`)).default,
}));

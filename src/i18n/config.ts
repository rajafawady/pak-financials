export type Locale = (typeof locales)[number];

export const locales = ['en', 'ur'] as const;
export const defaultLocale: Locale = 'en';

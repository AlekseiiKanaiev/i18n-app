import 'i18next';

declare module 'i18next' {
  interface i18n {
    language: 'en' | 'pl';
    languages: readonly ('en' | 'pl')[];
  }
}

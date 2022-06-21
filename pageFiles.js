// Vite resolves globs with micromatch: https://github.com/micromatch/micromatch
// Pattern `*([a-zA-Z0-9])` is an Extglob: https://github.com/micromatch/micromatch#extglobs
export const pageFiles = {
  '.page': import.meta.glob('/src/pages/subpage/index.page.vue'),
  '.page.client': import.meta.glob('/renderer/_default.page.client.ts'),
  '.page.server': import.meta.glob('/renderer/_default.page.server.ts'),
  '.page.route': import.meta.glob('/renderer/_default.page.route.ts'),
}

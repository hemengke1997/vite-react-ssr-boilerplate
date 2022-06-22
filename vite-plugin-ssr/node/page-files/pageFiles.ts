// Vite resolves globs with micromatch: https://github.com/micromatch/micromatch
// Pattern `*([a-zA-Z0-9])` is an Extglob: https://github.com/micromatch/micromatch#extglobs
export const pageFiles = {
  //@ts-ignore
  '.page': import.meta.importGlob('/**/*.page.*([a-zA-Z0-9])'),
  //@ts-ignore
  '.page.client': import.meta.importGlob('/**/*.page.client.*([a-zA-Z0-9])'),
  //@ts-ignore
  '.page.server': import.meta.importGlob('/**/*.page.server.*([a-zA-Z0-9])'),
  //@ts-ignore
  '.page.route': import.meta.importGlob('/**/*.page.route.*([a-zA-Z0-9])'),
}

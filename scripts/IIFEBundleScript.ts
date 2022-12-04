import { bundleScript } from './bundle'

try {
  const { BUNDLE_DIR, FILE_NAME } = process.env
  bundleScript(BUNDLE_DIR, FILE_NAME)
} catch {}

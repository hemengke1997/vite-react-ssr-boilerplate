import { loadLocaleJson } from '../utils'

const localesJson = import.meta.glob('./*.json', { eager: true, import: 'default' })

const locales = loadLocaleJson(localesJson)

export default locales

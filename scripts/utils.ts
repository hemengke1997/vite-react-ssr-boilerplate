import colors from 'picocolors'
import type { Options } from 'execa'

export const log = {
  info: (str: string, log = true) => {
    return log ? console.log(colors.cyan(str)) : colors.cyan(str)
  },
  error: (str: string, log = true) => {
    return log ? console.log(colors.red(str)) : colors.cyan(str)
  },
  success: (str: string, log = true) => {
    return log ? console.log(colors.green(str)) : colors.cyan(str)
  },
  warn: (str: string, log = true) => {
    return log ? console.log(colors.yellow(str)) : colors.cyan(str)
  },
}

export async function run(bin: string, args: string[], opts: Options<string> = {}) {
  const execa = await (await import('execa')).execa
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

import colors from 'picocolors'
import type { Options as ExecaOptions } from 'execa'
import { execa } from 'execa'
import minimist from 'minimist'

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

export const args = minimist(process.argv.slice(2))

export async function run(bin: string, args: string[], opts: ExecaOptions<string> = {}) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

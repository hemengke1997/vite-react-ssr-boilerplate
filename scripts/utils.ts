import colors from 'picocolors'

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

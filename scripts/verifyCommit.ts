import { readFileSync } from 'node:fs'
import colors from 'picocolors'

const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const commitRE =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps|merge)(\(.+\))?: .{1,50}/

if (!releaseRE.test(msg) && !commitRE.test(msg) && !msg.startsWith('Merge')) {
  console.error(
    `  ${colors.bgRed(colors.white(' ERROR '))} ${colors.red(`invalid commit message format.`)}\n\n${colors.red(
      `  Examples:\n\n`,
    )}    ${colors.green(`feat: add some function`)}\n` + `    ${colors.green(`fix: handle some error`)}\n`,
  )
  process.exit(1)
}

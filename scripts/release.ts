import dayjs from 'dayjs'
import minimist from 'minimist'
import colors from 'picocolors'

import type { Options } from 'execa'

async function run(bin: string, args: string[], opts: Options<string> = {}) {
  const execa = (await import('execa')).execa
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

enum BranchEnum {
  test = 'test',
  prod = 'master',
}

function step(msg: string) {
  return console.log(colors.cyan(msg))
}

async function main() {
  const Branch = [BranchEnum.test, BranchEnum.prod] as string[]
  const { stdout: branch } = await run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { stdio: 'pipe' })

  if (Branch.includes(branch)) {
    step(`\n 🚧 Building for ${branch}`)
    switch (branch) {
      case BranchEnum.test:
        await run('pnpm', ['run', 'build:test'])
        break
      case BranchEnum.prod:
        await run('pnpm', ['run', 'build'])
        break
      default:
        break
    }
    step('\n ✌️ Build success')
  }

  const { stdout } = await run('git', ['diff'], { stdio: 'pipe' })
  const { stdout: status } = await run('git', ['status', '-s'], { stdio: 'pipe' })

  await run('pnpm', ['run', 'bundleServer'], { stdio: 'pipe' })

  if (stdout || status) {
    step('\n 🚧 Committing changes...')
    await run('git', ['add', '-A'])
    const args = minimist(process.argv.slice(2))
    await run('git', [
      'commit',
      '-m',
      args.m ? `${args.m}` : `build: ${branch} at ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
      '--no-verify',
    ])
  } else {
    console.log('⚠️ No changes to commit.')
    return
  }

  step('\n 👾 Pushing to Git...')

  {
    const { stdout } = await run('git', ['remote', '-v'], { stdio: 'pipe' })
    const o = stdout.split('\n')[0]?.split('\t')[0]
    if (o) {
      await run('git', ['push', o, branch])
    } else {
      await run('git', ['push'])
    }
  }

  console.log(`\n 🌈  Git push finished`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

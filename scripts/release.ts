import { execa, Options as ExecaOptions } from 'execa'
import colors from 'picocolors'
import minimist from 'minimist'
import pkg from '../package.json'

enum BranchEnum {
  test = 'testing',
  prod = 'master',
}

async function run(bin: string, args: string[], opts: ExecaOptions<string> = {}) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

function step(msg: string) {
  return console.log(colors.cyan(msg))
}

async function main() {
  const Branch = [BranchEnum.test, BranchEnum.prod] as string[]
  const { stdout: branch } = await run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { stdio: 'pipe' })

  if (Branch.includes(branch)) {
    step('\n 🚧 Building...')
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

  if (status.includes('server/index.ts')) {
    await run('pnpm', ['run', 'bundleServer'], { stdio: 'pipe' })
  }

  if (stdout || status) {
    step('\n 🚧 Committing changes...')
    await run('git', ['add', '-A'])
    const args = minimist(process.argv.slice(2))
    await run('git', ['commit', '-m', args.m ? `${args.m}` : `build: v${pkg.version}`, '--no-verify'])
  } else {
    console.log('⚠️ No changes to commit.')
    return
  }

  step('\n 👾 Pushing to Gitee...')

  await run('git', ['push'])

  console.log(`\n 🌈 Git push finished`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

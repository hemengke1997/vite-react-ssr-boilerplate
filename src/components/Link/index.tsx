import { getBase } from '@root/shared'
import type { FC, ReactNode } from 'react'

const Link: FC<
  {
    children: ReactNode
  } & JSX.IntrinsicElements['a']
> = (props) => {
  const base = getBase()
  let { href } = props
  if (!href?.startsWith('/')) throw new Error('Link href should start with /')
  href = href.slice(1)
  return <a {...props} href={base + href} />
}

export { Link }

import { useGlobalContext } from '@root/renderer/global/useGlobalContext'
import { getBase } from '@root/shared'
import normalizePath from 'normalize-path'
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

  const { locale } = useGlobalContext()

  href = normalizePath(`${base}/${locale}/${href}`, false)

  return <a {...props} href={href} />
}

export { Link }

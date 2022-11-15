import clsx from 'clsx'
import styles from './index.module.css'

export function Page() {
  return (
    <>
      <div className={clsx('tw-italic', styles.pageA)}>this is page A</div>
    </>
  )
}

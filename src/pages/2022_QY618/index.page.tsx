import styles from './index.module.less'
import cns from 'classnames'
import { trackEvent } from '@/utils'
import { useRef } from 'react'
interface SelfPageProps {
  PACKAGES: object
}
export function Page(props: SelfPageProps) {
  const hashOne = useRef<HTMLDivElement | null>(null)
  const hashTwo = useRef<HTMLDivElement | null>(null)
  const hashThree = useRef<HTMLDivElement | null>(null)
  console.log(props)
  const hashClickHandler = () => {
    console.dir(hashOne.current)
  }
  return (
    <>
      <div className={cns(styles.specials, 'tw-flex', 'tw-flex-col')}>
        <div className={cns(styles.p1, styles.panel)}></div>
        <div className={cns(styles.p2, styles.panel)} id='page1'>
          {new Array(5).fill('').map((pkg, index) => {
            return (
              <div
                className={cns(styles.btnBuy, styles[`buy${index + 1}`])}
                data-package={`svip${index + 1}`}
                key={index}
                onClick={() => trackEvent('2022官网618活动_PC_SVIP购买')}
              ></div>
            )
          })}
          <div className={cns(styles.desc, styles.desc1)}>
            <span>低至</span>
            <span className='highlight'>0.59</span>
            <span>元/天</span>
          </div>
          <div className={cns(styles.desc, styles.desc2)}>
            <span>低至</span>
            <span className='highlight'>0.65</span>
            <span>元/天</span>
          </div>
        </div>
        <div className={cns(styles.p3, styles.panel)} id='page2'>
          <div className={cns(styles.left)}>
            <span>冰点价格</span>
            <span>再赠好礼</span>
          </div>
          <div className={cns(styles.right)}>
            <span>新品首发</span>
            <span>平台礼遇</span>
          </div>
          <a
            className={cns(styles.btnBuy, styles.buy1, 'btn-jump')}
            onClick={() => trackEvent('2022官网618活动_PC_跳转店铺')}
            href='https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.4d7c687dP07W2j&id=626709251272'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
          </a>
          <a
            className={cns(styles.btnBuy, styles.buy2, 'btn-jump')}
            onClick={() => trackEvent('2022官网618活动_PC_跳转店铺')}
            href='https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.4d7c687dP07W2j&id=675308615446'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
          </a>
        </div>
        <div className={cns(styles.p4, styles.panel)} id='page3'>
          {new Array(4).fill('').map((pkg, index) => {
            return (
              <div
                className={cns(styles.btnBuy, { [styles[`buy${index + 1}`]]: index > 0 })}
                data-package={`msvip${index + 1}`}
                key={index}
                onClick={() => trackEvent('2022官网618活动_PC_手游VIP购买')}
              ></div>
            )
          })}
        </div>
        <div className={cns(styles.p5, styles.panel)}>
          <div className={cns(styles.desc)}>
            <p>
              1.活动时间：<span className='highlight'>2022年6月17日10:00（周五）- 6月19日24:00（周日）</span>
            </p>
            <p>
              2.
              <span className='highlight'>
                SVIP会员优惠套餐每一类有且仅有一次购买机会，优惠价仅在此活动页充值购买才能生效，二次购买即为原价，且活动套餐不支持退款
              </span>
            </p>
            <p>
              3.本页面展示的
              <span className='highlight'>移动端会员套餐为限时折扣价，折扣套餐不限购买次数，购买后不支持退款</span>
            </p>
            <p>4.购买联机宝的用户，可参与京东/天猫各平台跨店满减活动，具体事宜可咨询官方店铺客服</p>
            <p>5.通过其他渠道购买各类服务套餐的用户，我们不予退换差价，请留意官方活动</p>
            <p>6.在法律允许的范围内，奇游拥有对本次活动的最终解释权</p>
          </div>
        </div>
        <div className={styles.hashContainer}>
          <div ref={hashOne} className={cns(styles.hash, styles.hash1)} onClick={() => hashClickHandler()}></div>
          <div ref={hashTwo} className={cns(styles.hash, styles.hash2)}></div>
          <div ref={hashThree} className={cns(styles.hash, styles.hash3)}></div>
          <div className={styles.toTop}></div>
        </div>
      </div>
    </>
  )
}

import { useRef, useState } from 'react'
import clsx from 'clsx'
import { trackEvent } from '@/utils/hmt'
import { useMount } from 'react-use'
import styles from './index.module.less'
import { axiosRequest } from '@/service/index'

const AID = 119 // 折扣活动

const PACKAGES = {
  svip1: {
    // pid: 400,
    pid: 636,
    pointsName: '2022官网618活动_PC_SVIP两年卡',
  },
  svip2: {
    // pid: 391,
    pid: 637,
    pointsName: '2022官网618活动_PC_SVIP年卡',
  },
  svip3: {
    // pid: 392,
    pid: 638,
    pointsName: '2022官网618活动_PC_SVIP半年卡',
  },
  svip4: {
    // pid: 393,
    pid: 639,
    pointsName: '2022官网618活动_PC_SVIP季卡',
  },
  svip5: {
    // pid: 394,
    pid: 640,
    pointsName: '2022官网618活动_PC_SVIP月卡',
  },
  msvip1: {
    pid: 601,
    pointsName: '2022官网618活动_PC_移动端会员年卡',
  },
  msvip2: {
    pid: 602,
    pointsName: '2022官网618活动_PC_移动端会员半年卡',
  },
  msvip3: {
    pid: 603,
    pointsName: '2022官网618活动_PC_移动端会员季卡',
  },
  msvip4: {
    pid: 604,
    pointsName: '2022官网618活动_PC_移动端会员月卡',
  },
}
export function Page() {
  const hashOne = useRef<HTMLDivElement | null>(null)
  const hashTwo = useRef<HTMLDivElement | null>(null)
  const hashThree = useRef<HTMLDivElement | null>(null)

  const [loading, setLoading] = useState(false)

  const onBuyBtnClick: React.DOMAttributes<HTMLDivElement>['onClick'] = (e) => {
    if (loading) return

    const packageType = e.currentTarget.getAttribute('data-package')
    setLoading(true)

    if (packageType?.startsWith('svip')) {
      trackEvent('2022官网618活动_移动端_SVIP购买')
    } else {
      trackEvent('2022官网618活动_移动端_手游VIP购买')
    }
  }

  const getActivityInfo = async (aid: number) => {
    const res = await axiosRequest.get({
      url: `/api/front/get_activity_detail_by_id`,
      params: {
        activity_id: aid,
        time: new Date().getTime(),
      },
    })

    console.log(res, 'ressss')
  }

  useMount(() => {
    getActivityInfo(AID)
  })

  return (
    <>
      <div className={clsx(styles.specials, 'tw-flex', 'tw-flex-col')}>
        <div className={clsx(styles.p1, styles.panel)}></div>
        <div className={clsx(styles.p2, styles.panel)} id='page1'>
          {new Array(5).fill('').map((_, index) => {
            return (
              <div
                className={clsx(styles.btnBuy, styles[`buy${index + 1}`])}
                data-package={`svip${index + 1}`}
                key={index}
                onClick={onBuyBtnClick}
              ></div>
            )
          })}
          <div className={clsx(styles.desc, styles.desc1)}>
            <span>低至</span>
            <span className='highlight'>0.59</span>
            <span>元/天</span>
          </div>
          <div className={clsx(styles.desc, styles.desc2)}>
            <span>低至</span>
            <span className='highlight'>0.65</span>
            <span>元/天</span>
          </div>
        </div>
        <div className={clsx(styles.p3, styles.panel)} id='page2'>
          <div className={clsx(styles.left)}>
            <span>冰点价格</span>
            <span>再赠好礼</span>
          </div>
          <div className={clsx(styles.right)}>
            <span>新品首发</span>
            <span>平台礼遇</span>
          </div>
          <a
            className={clsx(styles.btnBuy, styles.buy1, 'btn-jump')}
            onClick={() => trackEvent('2022官网618活动_PC_跳转店铺')}
            href='https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.4d7c687dP07W2j&id=626709251272'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
          </a>
          <a
            className={clsx(styles.btnBuy, styles.buy2, 'btn-jump')}
            onClick={() => trackEvent('2022官网618活动_PC_跳转店铺')}
            href='https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.4d7c687dP07W2j&id=675308615446'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
          </a>
        </div>
        <div className={clsx(styles.p4, styles.panel)} id='page3'>
          {new Array(4).fill('').map((pkg, index) => {
            return (
              <div
                className={clsx(styles.btnBuy, { [styles[`buy${index + 1}`]]: index > 0 })}
                data-package={`msvip${index + 1}`}
                key={index}
                onClick={() => trackEvent('2022官网618活动_PC_手游VIP购买')}
              ></div>
            )
          })}
        </div>
        <div className={clsx(styles.p5, styles.panel)}>
          <div className={clsx(styles.desc)}>
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
          <div ref={hashOne} className={clsx(styles.hash, styles.hash1)} onClick={() => {}}></div>
          <div ref={hashTwo} className={clsx(styles.hash, styles.hash2)}></div>
          <div ref={hashThree} className={clsx(styles.hash, styles.hash3)}></div>
          <div className={styles.toTop}></div>
        </div>
      </div>
    </>
  )
}

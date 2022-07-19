import styles from './less/index.module.less'
import clsx from 'clsx'
import { useState, useRef } from 'react'
import { divide } from 'lodash-es'
import { BlockList } from 'net'
import { LoginModal } from './LoginModal'
import React from 'react'
const Header: React.FC = () => {
  const menus = [
    {
      href: '/',
      text: '首页',
    },
    {
      href: '/main/ljb-overview',
      text: '联机宝',
    },
    {
      href: '/main/QiyouMobile',
      text: '手游加速器',
    },
    {
      href: '/main/game',
      text: '支持游戏',
    },
    {
      href: '/main/help-list',
      text: '帮助',
    },
    {
      href: '/main/notice',
      text: '公告',
    },
  ]
  const [isShowLoginModal, setIsShowLoginModal] = useState(false)
  const [currentTb, setCurrentTab] = useState(true)

  const controlLoginModal = (val: boolean) => {
    setIsShowLoginModal(val)
  }

  const changeCurrentTab = (val: boolean) => {
    setCurrentTab(val)
  }
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.headerContent)}>
        <a href='https://www.qiyou.cn' className={styles.logo}></a>
        <div className={styles.menus}>
          {menus.map((item, index) => (
            <a href={item.href} key={index} className={styles.menu}>
              {item.text}
            </a>
          ))}
        </div>
        <div className={styles.login_cont}>
          <div className={styles.menu_btn}>
            <a className={styles.login} onClick={() => controlLoginModal(true)}>
              登录
            </a>
            <a className={styles.download_btn} target='_blank' href=''>
              下载PC客户端
            </a>
          </div>
          {/* <div className='user-info'>
            <div className='avatar-container'>
              <div className='avatar'></div>
              <a href='/member/center' className='user-account'></a>
              <div className='more'></div>
            </div>
            <div className='user-menu'>
              <a href='/member/account/update' className='change-pass'>
                修改密码
              </a>
              <a href='' className='user-log-out'>
                退出
              </a>
            </div>
          </div> */}
        </div>
        {isShowLoginModal ? (
          <LoginModal
            currentTab={currentTb}
            changeLoginModalFuc={controlLoginModal}
            loginByMessageFuc={changeCurrentTab}
          ></LoginModal>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export { Header }

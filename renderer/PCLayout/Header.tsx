import styles from './index.module.less'
import clsx from 'clsx'
import { useState } from 'react'
import { divide } from 'lodash-es'
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
  const [currentTb, setCurrentTab] = useState(1)

  const controlLoginModal = (val: boolean) => {
    setIsShowLoginModal(val)
  }
  const toLoginBtn = () => {
    console.log('去登录')
  }
  const changeCurrentTab = (val: number) => {
    console.log(val, 'currentTab')
    setCurrentTab(val)
  }
  const LoginModal = (props: any) => {
    const { currentTab, changeLoginModalFuc, toLoginFuc, loginByMessageFuc } = props
    const changeLoginModalStatus = (val: any) => {
      changeLoginModalFuc(val)
    }
    const toLogin = () => {
      toLoginFuc()
    }
    const loginByMessage = () => {
      loginByMessageFuc(2)
    }
    const InputBox = () => {
      let inputBox
      if (currentTab == 1) {
        inputBox = (
          <div className={styles.inputBox}>
            <input type='text' placeholder='手机号码/邮箱' />
            <input type='text' placeholder='密码' />
          </div>
        )
      } else {
        inputBox = (
          <div className={styles.inputBox}>
            <input type='text' placeholder='手机' />
            <div className={styles.sms_login}>
              <input type='text' placeholder='验证码' />
              <button>发送验证码</button>
            </div>
          </div>
        )
      }
      return inputBox
    }
    return (
      <div className={styles.login_modal}>
        <div className={styles.modal_container}>
          <span className={styles.close} onClick={() => changeLoginModalStatus(false)}></span>
          <InputBox></InputBox>
          {/* <input type='text' placeholder='手机号码/邮箱' />
          <input type='text' placeholder='密码' /> */}
          {/* <div className={styles.sms_login_wrapper}>
            <button className={`${styles.login_sms_send_btn} ${styles.disabled}`} disabled>
              发送验证码
            </button>
          </div> */}
          {/* <div id='geetest-box'></div> */}
          <div className={styles.check_type_wrapper}>
            <div
              className={styles.login_type}
              onClick={() => {
                loginByMessage()
              }}
            >
              {currentTab == 1 ? '短信验证码登录' : '账号密码登录'}
            </div>
            <a href='/forgot-password' className={styles.forget_pass}>
              忘记密码？
            </a>
          </div>
          <button className={styles.modal_login_btn} onClick={() => toLogin()}>
            登录
          </button>
          <p className={styles.tip}>
            <span>
              没有奇游账号？
              <a href='/register' target='_blank' className={styles.modal_reg}>
                立即注册
              </a>
            </span>
          </p>
        </div>
      </div>
    )
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
            toLoginFuc={toLoginBtn}
            loginByMessageFuc={changeCurrentTab}
          ></LoginModal>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header

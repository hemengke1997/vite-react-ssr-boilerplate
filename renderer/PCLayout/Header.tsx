import styles from './index.module.less'
import clsx from 'clsx'

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
            <a className={styles.login}>登录</a>
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
        {/* <div className='login-modal'>
          <div className='modal-container'>
            <span className='close'></span>
            <div className='sms-login-wrapper'>
              <button className='login-sms-send-btn disabled' disabled>
                发送验证码
              </button>
            </div>
            <div id='geetest-box'></div>
            <div className='check-type-wrapper'>
              <div className='login-type'>短信验证码登录</div>
              <a href='/forgot-password' className='forget-pass'>
                忘记密码？
              </a>
            </div>
            <button className='modal-login-btn'>登录</button>
            <p className='tip'>
              <span>
                没有奇游账号？
                <a href='/register' target='_blank' className='modal-reg'>
                  立即注册
                </a>
              </span>
            </p>
          </div>
        </div> */}
      </div>
    </header>
  )
}

export default Header

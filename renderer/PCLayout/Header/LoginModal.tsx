import { useRef, useState } from 'react'
import { useMount } from 'react-use'
import styles from './less/loginModal.module.less'
import { axiosRequest } from '@/service/index'
import { Form, Input } from 'antd'
const LoginModal = (props: any) => {
  const { currentTab, changeLoginModalFuc, toLoginFuc, loginByMessageFuc } = props
  const [formOfPhone] = Form.useForm()
  const [isActive, setActive] = useState(false)
  //   const [username, setUserName] = useState('')
  //   const [password, setPassword] = useState('')
  //   const [phone_num, setPhoneNUM] = useState('')
  //   const [code, setPassword] = useState('')
  const userInfo = useRef({
    username: '',
    password: '',
    phone_num: '',
    code: '',
  })
  const [loginData, setLoginData] = useState(userInfo.current)
  const checkIsActive = () => {
    // if (userInfo.current.username !== '' && userInfo.current.password !== '') {
    if (userInfo.current.username !== '') {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  const checkUsernameChange = (val: string) => {
    userInfo.current = Object.assign({}, loginData, { username: val })
    console.log(userInfo.current, 'current')

    // setLoginData(userInfo.current)
    checkIsActive()
  }

  const checkPasswordChange = (val: string) => {
    userInfo.current = Object.assign({}, loginData, { password: val })
    setLoginData(userInfo.current)
    checkIsActive()
  }

  const checkPhoneChange = (val: string) => {
    userInfo.current.code = val
  }
  const checkCodeChange = (val: string) => {
    userInfo.current.phone_num = val
  }

  const changeLoginModalStatus = (val: any) => {
    changeLoginModalFuc(val)
  }

  const toLogin = () => {
    toLoginFuc()
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
  const loginByMessage = () => {
    loginByMessageFuc(!currentTab)
  }
  const SmsLogin = () => {
    return (
      <div className={styles.inputBox}>
        <input type='text' placeholder='手机' onChange={(event) => checkPhoneChange(event.target.value)} />
        <div className={styles.sms_login}>
          <input
            type='text'
            value={userInfo.current.code}
            placeholder='验证码'
            onChange={(event) => checkCodeChange(event.target.value)}
          />
          <button>发送验证码</button>
        </div>
      </div>
    )
  }
  useMount(() => {
    console.log('mount')
    getActivityInfo(122)
  })
  //   const PhoneLogin = () => {
  //     return (
  //       <div className={styles.inputBox}>
  //         <input
  //           type='text'
  //           value={loginData.username}
  //           placeholder='手机号码/邮箱'
  //           onBlur={(event) => checkUsernameChange(event.target.value)}
  //           onChange={(event) => checkUsernameChange(event.target.value)}
  //         />
  //         <input
  //           value={loginData.password}
  //           type='password'
  //           placeholder='密码'
  //           onBlur={(event) => checkUsernameChange(event.target.value)}
  //           onChange={(event) => checkPasswordChange(event.target.value)}
  //         />
  //       </div>
  //     )
  //   }
  const onFinishOfEmail = () => {
    console.log()
  }

  const PhoneLogin = () => {
    return (
      <Form initialValues={loginData} name='basic' form={formOfPhone} onFinish={onFinishOfEmail}>
        <Form.Item>
          <Form.Item name='username' shouldUpdate={true}>
            <Input
              name='username'
              style={{ height: '39px' }}
              onKeyUp={(e) => checkUsernameChange(e.target.value)}
              onChange={(e) => checkUsernameChange(e.target.value)}
              autoComplete='off'
              placeholder='手机号码/邮箱'
            />
          </Form.Item>
        </Form.Item>
        {/* <div className={styles.inputBox}>
          <input
            type='text'
            defaultValue={loginData.username}
            placeholder='手机号码/邮箱'
            onBlur={(event) => checkUsernameChange(event.target.value)}
          />
          <input
            defaultValue={loginData.password}
            type='password'
            placeholder='密码'
            onBlur={(event) => checkPasswordChange(event.target.value)}
          />
        </div> */}
      </Form>
    )
  }
  return (
    <div className={styles.login_modal}>
      <div className={styles.modal_container}>
        <span className={styles.close} onClick={() => changeLoginModalStatus(false)}></span>
        {currentTab ? <PhoneLogin></PhoneLogin> : <SmsLogin></SmsLogin>}
        {/* <div id='geetest-box'></div> */}
        <div className={styles.check_type_wrapper}>
          <div
            className={styles.login_type}
            onClick={() => {
              loginByMessage()
            }}
          >
            {currentTab ? '短信验证码登录' : '账号密码登录'}
          </div>
          <a href='/forgot-password' className={styles.forget_pass}>
            忘记密码？
          </a>
        </div>
        <button className={`${styles.modal_login_btn} ${isActive ? styles.active : ''}`} onClick={() => toLogin()}>
          登录 {loginData.username}
        </button>
        <p className={styles.tip}>
          <span>
            没有奇游账号？
            <a href='https://www.qiyou.cn/register' target='_blank' className={styles.modal_reg} rel='noreferrer'>
              立即注册
            </a>
          </span>
        </p>
      </div>
    </div>
  )
}

export { LoginModal }

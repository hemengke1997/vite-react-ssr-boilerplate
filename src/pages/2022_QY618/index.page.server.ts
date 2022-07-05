async function onBeforeRender() {
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
  return {
    pageContext: {
      pageProps: {
        a: 1,
        PACKAGES,
      },
      documentProps: {
        title: 'a',
        isMobile: false,
        layout: true,
      },
    },
  }
}

export { onBeforeRender }

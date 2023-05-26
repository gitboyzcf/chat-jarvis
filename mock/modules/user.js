// 登录用户mock数据
export default [
  {
    url: '/mock/login',
    method: 'post',
    response: (option) => {
      return {
        code: 200,
        mgs: 'success',
        data: {
          account: option.body.account || 'admin',
          token: '@string',
          failure_time: Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
        }
      }
    }
  }
]

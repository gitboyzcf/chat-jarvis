// import { router } from 'vue-router'
import { ElMessage } from 'element-plus'
import { throttle } from 'lodash-es'
import consola from 'consola'

export const httpLogError = (error, msg) => {
  error.message = msg
  consola.error(new Error(msg))
}

export const requestError = (response) => {
  return new Promise((_, reject) => {
    const { data } = response
    const msg = `api请求出错 ${response.config.url}`
    ElMessage({
      message: msg,
      type: 'error'
    })
    consola.error(new Error(msg))
    reject(data)
  })
}

export const toLogin = () => {
  // router.push({
  //   name: 'login',
  //   query: {
  //     redirect:
  //       router.currentRoute.value.path !== '/501' ? router.currentRoute.value.fullPath : undefined
  //   }
  // })
}

export const throttleToLogin = throttle(toLogin, 2000, { leading: true, trailing: false })
export const validator = (key) => {
  if (!key.startsWith('API_')) {
    consola.warn(`api名称必须以API_为开头,${key} 应改为 API_${key}`)
  }
}

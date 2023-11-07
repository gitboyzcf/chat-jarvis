/**
 * @Description:
 * @Author zcf
 * @Date 2023-10-24 17:11
 * @E-mail boyzcf@qq.com
 */
import { createPinia } from 'pinia'
export const piniaStore = createPinia()
export function setupStore(app) {
  app.use(piniaStore)
}

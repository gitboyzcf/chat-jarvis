/**
 * @Description: 项目插件
 * @Author zcf
 * @Date 2023-11-07 11:22
 * @E-mail boyzcf@qq.com
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
export default {
  install(app) {
    app.use(ElementPlus)
  }
}

import vue from '@vitejs/plugin-vue'
import createJsx from './jsx'
import createMock from './mock'
import createHtml from './html'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createJsx())
  vitePlugins.push(createMock())
  vitePlugins.push(createHtml(viteEnv, isBuild))
  return vitePlugins
}

import vue from '@vitejs/plugin-vue'
import createJsx from './jsx'
import createMock from './mock'
import createHtml from './html'
import createAutoImport from './auto-import'

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()]
  vitePlugins.push(createJsx())
  vitePlugins.push(createMock())
  vitePlugins.push(createHtml(viteEnv, isBuild))
  vitePlugins.push(createAutoImport())
  return vitePlugins
}

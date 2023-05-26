import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './build/vite/plugins'

// https://vitejs.dev/config/
/**
 * mode 用来加载.env文件
 * command 用来判断当前是 serve 开发 build 打包
 */
export default ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    base: '/chat-jarvis/',
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}

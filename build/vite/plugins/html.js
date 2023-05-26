import { createHtmlPlugin } from 'vite-plugin-html'

export default function createHtml(env, isBuild) {
  const html = createHtmlPlugin({
    inject: {
      data: {
        ...env
      }
    },
    minify: isBuild
  })
  return html
}

import { useTitle } from '@vueuse/core'
export async function urlParamsLogin() {}

/**
 * 用于修改标签页标题
 * @param {路由对象} to
 */
export function usePageTitle(to) {
  const projectTitle = import.meta.env.VITE_APP_TITLE
  const rawTitle = normalizeTitle(to.meta.title)
  const title = useTitle()
  title.value = rawTitle ? `${projectTitle} | ${rawTitle}` : projectTitle
  function normalizeTitle(raw) {
    return typeof raw === 'function' ? raw() : raw
  }
}

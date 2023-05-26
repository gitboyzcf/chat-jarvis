/**
 * 模块话方式处理 默认处理 modules文件夹下的所有js文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
export const modulesHandle = (moduleContext = {}) => {
  if (!Object.keys(moduleContext).length) return
  const modules = []
  Object.keys(moduleContext).forEach((v) => {
    modules.push(...moduleContext[v].default)
  })
  return modules
}

import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import { modulesHandle } from '@/utils'

export function setupProdMockServer() {
  createProdMockServer(modulesHandle(import.meta.glob('./modules/**/*.js', { eager: true })))
}

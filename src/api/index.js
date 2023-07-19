import { modulesHandle } from '@/utils'

const apis = modulesHandle(import.meta.glob('./modules/**/*.js', { eager: true }))
console.info(apis)

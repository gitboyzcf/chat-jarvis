import { viteMockServe } from 'vite-plugin-mock'

export default function createMock() {
  return viteMockServe({
    // eslint-disable-next-line
    ignore: /^\_/,
    mockPath: 'mock',
    injectCode: `
            import { setupProdMockServer } from '../mock/_createProductionServer.js';
            setupProdMockServer();
        `
  })
}

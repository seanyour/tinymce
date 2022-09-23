import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';

const pathResolve = (path:string):string => {
  return resolve(__dirname, path);
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src'),
      'public': pathResolve('public'),
    }
  },
  plugins: [vue()]
})

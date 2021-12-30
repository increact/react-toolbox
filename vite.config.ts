import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
  ],
  server: {
    host: '0.0.0.0',
    port: 80,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'components/index.js'),
      name: 'react-toolbox',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});

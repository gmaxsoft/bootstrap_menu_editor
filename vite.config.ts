import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from 'path';

export default defineConfig({
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  server: {
    fs: {
      allow: ['.', './node_modules']
    }
  },
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MenuEditor",
      fileName(format, entryName) {
        let strFormat = '';
        if (format != 'es') {
          strFormat = `.${format}`;
        }
        return `${entryName}${strFormat}.js`;
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') {
            return 'css/styles.css';
          } else if (assetInfo.name === 'bootstrap_menu_editor.css') {
            return 'css/bootstrap_menu_editor.min.css';
          }
          return `[name][hash][extname]`;
        }
      }
    },
  },
  resolve: {
    alias: {
      'fontawesome-free-all.json': path.resolve(__dirname, 'node_modules/@maxsoft/fontawesome-iconpicker/dist/fontawesome-free-all.json')
    }
  },
  plugins: [dts()],
});

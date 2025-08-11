import { resolve } from "path";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  server: {
    fs: {
      allow: ['.', './node_modules']
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MenuEditor",
      formats: ['umd'],
      fileName: (format) => {
        return `menu-editor.js`;
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'styles.min.css';
          } else if (assetInfo.name === 'bootstrap_menu_editor.css') {
            return 'bootstrap_menu_editor.min.css';
          }
          return `[name][hash][extname]`;
        }
      }
    }
  },
  resolve: {
    alias: {
      'fontawesome-free-all.json': path.resolve(__dirname, 'node_modules/@maxsoft/fontawesome-iconpicker/dist/fontawesome-free-all.json')
    }
  }
});

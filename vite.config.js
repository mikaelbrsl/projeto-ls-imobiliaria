// import { defineConfig } from "vite";

// export default defineConfig({
//     base: './',
// })

import { defineConfig } from 'vite';

export default defineConfig({
  base: './projeto-ls-imobiliaria',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './cadastro.html',
      },
    },
  },
});
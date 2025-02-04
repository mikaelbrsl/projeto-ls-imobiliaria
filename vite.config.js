import { defineConfig } from 'vite';

export default defineConfig({
  base: '/projeto-ls-imobiliaria/', // Certifique-se de colocar a barra no final
  build: {
    outDir: 'dist', // Pasta de saída da build (padrão do Vite)
    rollupOptions: {
      input: {
        main: 'index.html', // Remova a barra inicial
        cadastro: 'cadastro.html', // Alterado para corresponder ao nome correto
      },
    },
  },
});

# Tio Ferreira — Links (Vite + React + Tailwind)

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:5173

---

## Como editar os links

Abra `src/App.jsx` e edite o bloco no topo do arquivo:

```js
const UNITS = [
  {
    label: 'Unidade Grand Jardim',
    whatsapp: 'https://wa.me/55829XXXXXXXX', // ← coloque o número real
    maps: 'https://maps.google.com/?q=...',  // ← link do Google Maps
  },
  // ...
]

const LINKS = {
  instagram: 'https://instagram.com/seuuser',
  trabalhe: 'mailto:rh@tioferreira.com.br',
  youtube: 'https://youtube.com/@seucanal',
  tiktok: 'https://tiktok.com/@seuuser',
}
```

---

## Como subir no Netlify (mais fácil)

1. Rode `npm run build`
2. Acesse https://netlify.com
3. Arraste a pasta `/dist` gerada para o Netlify
4. Pronto — link gerado na hora!

---

## Como subir no GitHub Pages

1. Em `vite.config.js`, descomente e edite a linha:
   ```js
   base: '/nome-do-seu-repositorio/',
   ```

2. Faça o build:
   ```bash
   npm run build
   ```

3. Suba a pasta `/dist` em uma branch `gh-pages` no GitHub.

4. No repositório GitHub → Settings → Pages → selecione a branch `gh-pages`.

**Ou use o GitHub Actions** — crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Com isso, cada push na branch `main` publica automaticamente.

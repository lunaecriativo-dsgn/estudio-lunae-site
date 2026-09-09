# estudio-lunae-site
Site oficial da Lunae Estudio Criativo

## Rodar localmente

**Pré-requisito:** Node.js

1. Instalar dependências:
   `npm install`
2. Rodar em modo desenvolvimento:
   `npm run dev`
3. Gerar build de produção:
   `npm run build` (gera a pasta `dist/`)

O deploy para a Hostinger acontece automaticamente a cada push na branch `main`, via GitHub Actions (`.github/workflows/deploy.yml`).

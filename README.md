# Portfolio RN (Expo)

Este projeto esta pronto para importacao no Snack via GitHub.

## Como importar no Snack

1. Publique o repositorio no GitHub.
2. Abra https://snack.expo.dev.
3. Use a opcao de importar do GitHub e selecione este repositorio.
4. Aguarde o Snack instalar as dependencias automaticamente.

## Requisitos para funcionar no Snack

- Entrada padrao Expo em package.json:
  - main: node_modules/expo/AppEntry.js
- Componente raiz em App.tsx (default export).
- Dependencias web presentes:
  - react-dom
  - react-native-web
- Slider instalado:
  - @react-native-community/slider

## Imagens locais

As imagens estao referenciadas com require em src/data/portfolio.ts.
Ao trocar imagens, mantenha os arquivos dentro de assets/ e atualize os caminhos no require.

## Se der erro de import no Snack

1. Verifique se o repositorio esta publico (ou autenticado no Snack).
2. Confirme se package.json e App.tsx estao na raiz.
3. Reimporte o projeto no Snack para limpar cache.

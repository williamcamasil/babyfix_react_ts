### Projeto babyfix

[Eslint](https://eslint.org/docs/user-guide/getting-started), [Prettier](https://prettier.io/docs/en/install.html) e [video](https://www.youtube.com/watch?v=duKqKhtZmPA&ab_channel=JorgeAluizio) de apoio para configuração. 

```
#Criar projeto
npx create-react-app react-redux-ts --template typescript

#Configurando eslint e prettier
yarn add eslint --dev
yarn run eslint --init

yarn add eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest	
yarn add eslint-plugin-react --dev
yarn add eslint-plugin-react-hooks --dev

yarn add --dev --exact prettier
echo {}> .prettierrc.json

yarn add --dev eslint-plugin-prettier eslint-config-prettier
```


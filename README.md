## Projeto babyfix



**Protótipo:** [Figma User Interface](https://www.figma.com/file/Asw5VjjxMoBfmjAPXIpQ8d/BabyFix)

----



#### Passos para executar o projeto:

```
#1 - clone o projeto na máquina
#2 - acesse a pasta raiz (/babyfix_react_ts)
#3 - execute o comando yarn ou npm install no terminal para instalar as dependências
#4 - execute o comando yarn start ou npm start no terminal para iniciar o projeto 
```



---

### Dependências utilizadas no projeto 

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

##### [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start)

```
yarn add react-router-dom@5.2.0 @types/react-router-dom
```

##### [Styled Components](https://styled-components.com/)

```
yarn add styled-components
yarn add -D @types/styled-components
```

##### [React Hook Form](https://react-hook-form.com/get-started)

```
yarn add react-hook-form
```

##### [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

````
yarn add react-toastify
````

##### [React Axios]()

```
yarn add axios
```

[**React Icons**](https://react-icons.github.io/react-icons/icons?name=ai)

```
yarn add react-icons
```



---

### Testes

````
# para executar os testes no terminal:
yarn test
OR
yarn test:watch
````

##### [Testes no React](https://testing-library.com/docs/)

```
Package.json -> scripts: (para usar fixtures sem precisar inserir um teste dentro da pasta)
"test": "react-scripts test --watchAll=false",
"test:watch": "react-scripts test",

-------------------------------------
#Mock Service Worker: MSW serve para mockar backend nos testes
yarn add msw
https://mswjs.io/docs/getting-started/mocks/rest-api
```

##### Mais informações sobre testes

- https://github.com/sapegin/jest-cheat-sheet
- https://github.com/testing-library/jest-dom

##### Testes realizados

- **Registrar**
  - Input
    - Verificar se emite erro ao não cadastrar algo no input
    - Validação de requisição de CEP
  - Botão
    - Salvar dados na lista
    - Limpar campo
- **Listar**
  - Confirmar se dados estão na lista 
  - Validar função para valor com preço em moeda brasileira 
  - Confirmar classe no item deletar



 

# vue 2

需要去掉原有项目中的所有 eslint、stylelint、prettier、husky、lint-staged 依赖。

### 1、安装依赖

```json
{
  "devDependencies": {
    "@zhbhun/eslint-config-vue": "^1.1.0",
    "@zhbhun/stylelint-config": "^1.0.0",
    "@zhbhun/prettier-config": "^1.0.9",
    "eslint": "^8.0.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.1",
    "prettier": "^2.0.0",
    "stylelint": "^14.0.0"
  }
}
```

### 2、安装 Git 钩子

```jsx
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"
```

### 3、配置项目

- `.eslintrc.js`

    ```js
    const path = require('path')

    module.exports = {
      root: true,
      extends: ['@zhbhun/eslint-config-vue/vue2'],
    }
    ```

- `.stylelintrc.js`

    ```js
    module.exports = {
      extends: ['@zhbhun/stylelint-config'],
    }
    ```

- `.prettierrc.js`

    ```js
    module.exports = require('@zhbhun/prettier-config')
    ```

- `package.json`

    ```json
    {
      "scripts": {
        "prepare": "husky install",
        "lint:js": "eslint --ext .js,.vue ./src",
        "lint:css": "stylelint --allow-empty-input \"./**/*.(css|less|scss|vue)\"",
        "lint": "npm run lint:js && npm run lint:css",
        "format:js": "eslint --fix --ext .js,.vue ./src",
        "format:css": "stylelint --fix --allow-empty-input \"./**/*.(css|less|scss|vue)\"",
        "format": "npm run format:js && npm run format:css",
        "pre-commit": "lint-staged"
      },
      "lint-staged": {
        "*.{vue,js}": "eslint --fix",
        "*.{vue,css,less,sass,scss}": "stylelint --fix"
      }
    }
    ```

### 4、验证

```shell
git add .
npm run pre-commit
```

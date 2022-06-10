# vue3 + tsx

需要去掉原有项目中的所有 eslint、prettier、husky、lint-staged、stylelint 依赖。

### Monorepo 项目

#### 1、安装依赖

- `./package.json`：项目根配置

    ```json
    {
      "devDependencies": {
        "husky": "^8.0.1"
      }
    }
    ```

- `./pacakges/xxx/package.json`：项目包配置

    ```json
    {
      "devDependencies": {
        "@zhbhun/eslint-config-vue": "^1.1.0",
        "@zhbhun/stylelint-config": "^1.0.0",
        "eslint": "^8.0.0",
        "husky": "^8.0.1",
        "lint-staged": "^13.0.1",
        "prettier": "^2.0.0",
        "stylelint": "^14.0.0"
      }
    }
    ```

#### 2、安装 Git 钩子

项目根目录运行

```jsx
npx husky install
npx husky add .husky/pre-commit "yarn workspaces run pre-commit"
```

#### 3、配置项目

- `./package.json`：项目根配置

    ```json
    {
      "scripts": {
        "prepare": "husky install"
      }
    }
    ```

- `./pacakges/xxx/.eslintrc.js`：项目包 eslint 配置

    ```js
    const path = require('path')

    module.exports = {
      root: true,
      extends: ['@zhbhun/eslint-config-vue/typescript'],
      settings: {
        // 解决 vscode 报错问题
        'import/resolver': {
          alias: {
            map: [
              ['~', path.resolve(__dirname, './src')],
              ['@', path.resolve(__dirname, './src')],
            ],
          },
        },
      },
    }
    ```

- `./pacakges/xxx/.stylelintrc.js`：项目包 stylelint 配置

    ```js
    module.exports = {
      extends: ['@zhbhun/stylelint-config'],
    }
    ```

- `./pacakges/xxx/.prettierrc.js`：项目包 prettier 配置

    ```js
    module.exports = require('@zhbhun/prettier-config')
    ```

- `./pacakges/xxx/package.json`：项目包配置

    ```json
    {
      "scripts": {
        "lint:js": "eslint --ext .js,.vue ./src",
        "lint:css": "stylelint --allow-empty-input \"./**/*.(css|less|scss|vue)\"",
        "lint": "npm run lint:js && npm run lint:css",
        "format:js": "eslint --fix --ext .js,.vue ./src",
        "format:css": "stylelint --fix --allow-empty-input \"./**/*.(css|less|scss|vue)\"",
        "format": "npm run format:js && npm run format:css",
        "pre-commit": "lint-staged"
      },
      "lint-staged": {
        "*.{vue,ts,tsx,js,jsx}": "eslint --fix",
        "*.{vue,css,less,sass,scss}": "stylelint --fix"
      }
    }
    ```

#### 4、验证

```shell
git add .
yarn workspaces run pre-commit
```

### 普通项目

#### 1、安装依赖

```json
{
  "devDependencies": {
    "@zhbhun/eslint-config-vue": "^1.1.0",
    "@zhbhun/stylelint-config": "^1.0.0",
    "eslint": "^8.0.0",
    "husky": "^8.0.1",
    "lint-staged": "^13.0.1",
    "prettier": "^2.0.0",
    "stylelint": "^14.0.0"
  }
}
```

#### 2、安装 Git 钩子

```jsx
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"
```

#### 3、配置项目


- `.eslintrc.js`

    ```js
    const path = require('path')

    module.exports = {
      root: true,
      extends: ['@zhbhun/eslint-config-vue/typescript'],
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
        "lint:css": "stylelint ./src/**/*.{css,less}",
        "lint": "npm run lint:js && npm run lint:css",
        "format:js": "eslint --fix --ext .js,.vue ./src",
        "format:css": "stylelint --fix ./src/**/*.{css,less}",
        "format": "npm run format:js && npm run format:css",
        "pre-commit": "lint-staged"
      },
      "lint-staged": {
        "*.{vue,ts,tsx,js,jsx}": "eslint --fix",
        "*.{vue,css,less,sass,scss}": "stylelint --fix"
      }
    }
    ```

#### 4、验证

```shell
git add .
npm run pre-commit
```

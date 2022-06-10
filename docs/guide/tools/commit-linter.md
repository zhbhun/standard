# commitlint工具

目的：统一 commit message 提交信息，方便快速浏览和查找信息，可直接生成Change log

## Commit message 的格式

Commit message 都包括三个部分：Header，Body 和 Footer。  

header 是必需的，Body 和 Footer 可以省略  
feat：新功能（feature）  
fix：修补bug  
docs：文档（documentation）  
style： 格式（不影响代码运行的变动）  
refactor：重构（新增功能:No，修改bug的代码变动: No）  
test：增加测试  
chore：构建过程或辅助工具的变动  

其中 => feat 和 fix，则该 commit 将肯定出现在 Change log 之中

 ```
  <type>[optional scope]: <description>
 
  [optional body]
 
  [optional footer(s)]
 ```

## 项目集成

插件封装实现参考：[https://github.com/conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)

### 1、安装依赖

```json
{
  "devDependencies": {
    "@zhbhun/commitlint-config": "^1.1.0"
  }
}
```
### 2、添加配置文件

```shell
echo "module.exports = {extends: ['@zhbhun/commitlint-config']}" > commitlint.config.js
```
### 2、安装 Git 钩子

```shell
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 4、验证

```shell
git add .
git commit -m 'test'
```


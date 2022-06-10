# workspaces的使用
## 项目结构
```markdown
|-- standard
|      |--packages
|      |      |-- workspace-a
|      |      |      |--package.json
|      |      |-- workspace-b
|      |      |      |--package.json
|      |--package.json
|...
```
## 为什么使用它
```
    1、使项目的依赖关系可以链接在一起，可以相互依赖项目的工作区，同时始终使用最新的可用代码。
     这也是一个相对于yarn link更好的机制，因为它只影响你的工作空间树，而不是整个系统。
    2、对于每个项目，Yarn将使用一个单独的锁文件而不是为每个工程使用一个不同的锁文件，这意味着更少的冲突和更容易的审查
```
## 如何使用它
1.新建一个根文件夹用来放所有的项目，初始化一个package.json 文件
```json
{
    "private": true,
    "workspaces": [
        "workspace-a",
        "workspace-b"
    ]
}
```
或者 也接受glob模式

```json
{
    "private": true,
    "workspaces": [
      "packages/*"
    ]
}
```
2."workspace-a", "workspace-b" 是需要管理的子项目，都有自己的 package.json
workspace-a/package.json:
```json
{
    "name": "workspace-a",
    "version": "1.0.0",

    "dependencies": {
        "cross-env": "5.0.5"
    }
}
```
3.在根目录下运行 yarn install


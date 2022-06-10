## 开发说明

### 安装依赖

本项目采用了 yarn workspaces 来实现一个仓库管理多个 npm 包，所以在安装依赖的时候只需要在项目根目录运行 `yarn`。

### 版本管理

分支工作流

- master：发布正式版本时合并到该分支
- beta：发布测试版本时合并到该分支
- feature/x.y.z：特定版本的开发分支
- hotfix/xyz：正式版本的紧急修复分支
- develop：开发主分支

    在将 feature 和 hotfix 分支要正式发布前要先合并到 develop 分支，然后再合并到 master 去发布。

    feature 和 hotfix 都是基于 develop 建立的。

提交规范：必须遵循[《约定式提交》](https://www.conventionalcommits.org/zh-hans/)和[《语义化版本》](https://semver.org/lang/zh-CN/)，每次发布时自动化脚本会根据提交历史记录决定要升级的版本号。

- `BREAKING CHANGE`：升级主版本号
- `feat`: 升级次版本号
- `fix`：升级修订版本号

## 部署说明

### 测试版本

1. 合并功能分支或版本分支到 `beta`
2. 运行发布命令：`yarn run release`

### 正式版本

1. 合并功能分支或版本分支到 `develop`
2. 合并 `develop` 分支到 `master`
3. 运行发布命令：`yarn run release`

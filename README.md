# vite + ssr

## Intro

一个基于 vite + react + vite-plugin-ssr 的 SSR 项目模板

## Example

[online vercel](https://vite-react-ssr-boilerplate-hemengke1997.vercel.app/)

## Features

- 首屏 SSR
- 路由动画
- 国际化
- React18
- antd5
- 动态暗黑主题
- rtl/ltr
- tailwindcss
- vercel 部署
- docker 部署
- vite 驱动

## screenshot

<img src="./screenshots/ts.gif" />

## Branches

### master

自适应布局 + 客户端路由，纯 tailwindcss

### mobilepc

mobile/pc 区分布局，使用 pxtorem

### ssg

ssg 渲染

## development

```bash
pnpm install
```

```bash
pnpm run dev
```

## build

### test

```bash
pnpm run build:test
```

### prod

```bash
pnpm run build
```

## release

> 本地打包再部署的话可以执行(Docker 部署不需要)

```bash
pnpm run release
```

## deploy

### Docker

#### test

> container / image 名称可以自定义

```shell
# build
docker build --build-arg node_env=test -t web:1.0 .
# run
docker run -d -p 9527:9527 --name ssr-web web:1.0
```

#### production

```shell
# build
docker build --build-arg node_env=production -t web:1.0 .
# run
docker run -d -p 9527:9527 --name ssr-web web:1.0
```

### 传统部署

> 传统部署的话需要 `pnpm build:server` 打包 `pm2` 需要的脚本

#### test

```bash
pnpm run pm2:test
```

#### production

```bash
pnpm run pm2:prod
```

## 项目结构树

```
vite-react-ssr-boilerplate
├─ @types                                                 全局类型
├─ config                                                 关于项目的build/node相关配置
├─ public                                                 公共目录（build会直接copy）
├─ publicTypescript                                       typescript公共目录（build会编译后copy）
├─ renderer                                               vps渲染相关
├─ scripts                                                node脚本
├─ server                                                 node服务
├─ shared                                                 client & server 共享功能目录
├─ src                                                    业务源码
├─ postcss.config.cjs                                     postcss配置
├─ tailwind.config.cjs                                    tailwindcss配置
```

#### commitlint

##### @commitlint/cli

```json
{
  "commit-msg": "pnpm exec commitlint --edit $1"
}
```

##### vue commitlint

```json
{
  "commit-msg": "pnpm exec tsx scripts/verifyCommit.ts $1"
}
```

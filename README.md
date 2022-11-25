# vite + ssr

## Intro

ssr boilerplate based on vite/vite-plugin-ssr/react

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
├─ config                                                 关于项目的build/node相关配置
├─ public                                                 公共目录（build会直接copy）
├─ publicTypescript                                       typescript公共目录（build会编译后copy）
├─ renderer                                               vps渲染相关
├─ scripts                                                node脚本
├─ server                                                 node服务
├─ shared                                                 client & server 共享功能目录
├─ src                                                    业务源码
├─ template                                               页面模板
├─ typings                                                全局类型
├─ postcss.config.js                                      postcss配置
├─ README.md                                              开发前阅读
├─ tailwind.config.js                                     tw配置
├─ TODO.md                                                待开发list
```

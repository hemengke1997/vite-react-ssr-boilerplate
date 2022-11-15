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

```bash
pnpm run release
```

## deploy

### test

```bash
pnpm run pm2:test
```

### production

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

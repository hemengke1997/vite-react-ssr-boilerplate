# vite + ssr

## development

```bash
pnpm install
```

```bash
pnpm run start
```

## 项目结构树

```
├─ config                                                  关于项目的build/node相关配置
├─ dist                                                    打包输出目录
├─ public                                                  公共目录（build会直接copy）
├─ renderer                                                ssr渲染相关
├─ scripts                                                 node脚本
├─ server                                                  node服务
├─ shared                                                  client & server 共享功能目录
├─ src                                                     业务源码
│  ├─ assets                                               静态文件，放公共css/字体
│  ├─ client                                               客户端方法
│  ├─ hooks                                                react hook
│  ├─ pages                                                页面
│  ├─ service                                              axios
│  ├─ typings                                              全局类型（请勿随意添加）
│  └─ utils                                                工具方法
├─ template                                                页面模板
├─ postcss.config.js                                       postcss配置
├─ README.md                                               开发前阅读
├─ tailwind.config.js                                      tw配置
├─ TODO.md                                                 待开发list
```

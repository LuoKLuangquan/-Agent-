# -Agent-

做一个介绍自己的AI助手网站。

基于 **Vite + React + Tailwind CSS v4** 的单页站点，内容集中在 `src/data/profile.js` 一个文件里，改完即可生效，无需改动组件。

## 本地开发

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 产物在 dist/
pnpm preview    # 预览构建结果
```

> 也可用 npm：`npm install` / `npm run dev`。

## 修改内容

只需编辑 `src/data/profile.js`：

| 字段 | 说明 |
| --- | --- |
| `name` / `handle` | 名字与账号名 |
| `role` | 身份标签，如「AI 应用开发者」 |
| `slogan` | 首屏一句话 |
| `bio` | 简介段落（字符串数组） |
| `skills` | 技能关键词（`{ name, level }`） |
| `projects` | 项目卡片（`{ title, desc, tags, link }`） |
| `contacts` | 联系方式（`{ label, value, href }`） |
| `avatar` | 头像图片地址，留空则显示首字母 |

替换头像：把图片放到 `public/avatar.png`，`avatar` 写 `/avatar.png`。

## 部署到 GitHub Pages

仓库已带 `.github/workflows/deploy.yml`。推送后在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，之后每次 push 到 `main` 会自动构建并发布到：

```
https://luokluangquan.github.io/-Agent-/
```

`vite.config.js` 里的 `base` 已按仓库名设为 `/-Agent-/`，若仓库改名需同步修改。

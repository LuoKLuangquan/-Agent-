import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 项目站点地址是 https://<user>.github.io/<repo>/
// 仓库改名后这里要同步修改。
export default defineConfig({
  base: '/-Agent-/',
  plugins: [react(), tailwindcss()],
})

# 原子化CSS

UnoCSS
安装unocss及其预设
```cmd
pnpm i -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```

使用预设
vite.config.ts
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
          presetUno(), 
          presetAttributify(), 
          presetIcons()],
    }),
  ],
})
```

main.ts
引入css
```ts
import { createApp } from 'vue'
import App from './App.vue'

import 'uno.css'

createApp(App).mount('#app')
```

图标拓展
```https://icones.js.org/```
```cmd
pnpm i -D @iconify-json/ic
```
安装图标集
图标的使用语法是i+${图标集缩写名}+${图标名}


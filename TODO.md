# TODO · 尚未完成與可改善項目

> 此份清單追蹤本專案目前已知的待辦事項、改善方向與未來規劃。
> 隨開發進度更新，已完成項目移至 [CHANGELOG.md](./CHANGELOG.md)。

---

## 內容類 📝

### 必要
- [ ] 補上個人頭像 / Logo（目前 Hero 區只有文字）
- [ ] 加上 GitHub、LinkedIn 個人連結
- [ ] 補上每個專案的 GitHub repo 連結與 Demo 連結（若公開）
- [ ] 補上 favicon（目前載入時會 404）
- [ ] 寫 Open Graph meta 標籤，讓社群分享顯示預覽圖

### 加分
- [ ] 加入 PDF 版履歷下載按鈕
- [ ] 加入「最近在學什麼」或「Now」區段
- [ ] 補上推薦人 / 共事過的同學評語
- [ ] 加上專案截圖 / GIF 動畫

---

## 功能類 ⚙️

### 互動體驗
- [ ] 加入手機版漢堡選單（目前手機版 nav 偏擠）
- [ ] 加入「回到頂端」浮動按鈕
- [ ] 滾動時 navbar 對應高亮目前所在區段
- [ ] 加入頁面切換的淡入淡出 transition
- [ ] Hero 區的打字機效果可加上「打字音效」開關

### 內容呈現
- [ ] 技能頁加入「程度」視覺化（進度條 / 星等）
- [ ] 專案頁加入「demo embed」（嵌入 YouTube / Loom）
- [ ] 加入時間軸（Timeline）呈現學經歷
- [ ] 加入「Blog / 文章」區段（接 Markdown 檔渲染）

---

## 技術類 💻

### 程式品質
- [ ] 把 `script.js` 拆成 `main.js`、`skills.js`、`projects.js`、`background.js`
- [ ] 為 `SKILLS` 和 `PROJECTS` 加上 JSON Schema 驗證
- [ ] 使用 TypeScript 重寫，增加型別安全
- [ ] 加入 ESLint + Prettier 統一程式風格

### 效能優化
- [ ] 用 Lighthouse 跑分，目標 95+
- [ ] 加上 preload / prefetch 提升載入速度
- [ ] 把 CSS 拆分為 critical / async 載入
- [ ] Canvas 粒子數量依裝置效能動態調整
- [ ] 對手機 / 低電量裝置自動降低動畫複雜度（respect `prefers-reduced-motion`）

### 工程化
- [ ] 加入 Vite 或 esbuild 作為建置工具
- [ ] 設定 GitHub Actions 自動部署
- [ ] 加上 Dockerfile（練習用）
- [ ] 寫單元測試（測試 URL 參數解析、SKILLS 物件完整性）

---

## 設計類 🎨

- [ ] 補上深色 / 淺色主題切換按鈕
- [ ] 設計 404 頁面（目前是文字版的 fallback）
- [ ] 統一 icon 風格（目前部分用 Unicode 符號，可改成 SVG）
- [ ] Hero 區加入更精緻的背景元素（如 SVG 線稿動畫）
- [ ] 重新設計手機版的 contact terminal（目前較擠）

---

## 部署類 🚀

- [ ] 部署到 GitHub Pages
- [ ] 設定自訂網域（例如 `wychang.dev`）
- [ ] 加上 HTTPS（GitHub Pages 自動處理）
- [ ] 設定 Google Analytics 或 Plausible 看流量
- [ ] 設定 sitemap.xml + robots.txt

---

## 無障礙（A11y）♿

- [ ] 確保所有可點擊元素有 `aria-label`
- [ ] 鍵盤導覽 friendly（Tab 順序、focus state）
- [ ] 對比度檢查（目前淡灰文字在面試官眼裡可能太淡）
- [ ] 替所有圖片加上 `alt` 屬性
- [ ] 測試螢幕閱讀器表現（NVDA / VoiceOver）

---

## 國際化 🌐

- [ ] 加入英文版內容（目標：投國外實習可用）
- [ ] 加上語言切換按鈕
- [ ] 日期 / 數字格式 i18n 處理

---

## 已知的小問題 🐛

- [ ] Canvas 在某些舊版瀏覽器可能不顯示（缺少 fallback）
- [ ] 手機橫向（landscape）模式 hero 區可能被擠壓
- [ ] 在 iOS Safari 上，`backdrop-filter` 表現可能與 Chrome 不同
- [ ] 切換子頁時，scroll 位置會 reset，可能不是最佳體驗

---

## 優先級

> 依「對面試展示的幫助 × 實作成本」評估。

| 優先級 | 項目 |
| --- | --- |
| 🔥 高 | 部署到 GitHub Pages、補連結、補 favicon |
| 🌟 中 | 漢堡選單、回到頂端按鈕、Lighthouse 跑分 |
| 💡 低 | TypeScript 重寫、單元測試、i18n |

---

## Pull Request 歡迎

如果你看到這份履歷網站、覺得有可以改進的地方，歡迎開 Issue 或 PR！
任何形式的回饋都會讓我學到東西 🙏

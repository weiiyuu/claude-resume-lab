# 本次 Lab 練習到的技能整理

> 此份文件整理我在打造這個履歷網站過程中實際運用 / 練習到的技術點，方便面試時對應討論。

---

## 前端基礎

### HTML5
- ✅ 語意化標籤：`<nav>`、`<header>`、`<main>`、`<section>`、`<article>`、`<footer>`
- ✅ Meta 標籤：`viewport`（RWD 必備）、字元編碼、`title`
- ✅ ARIA 友善的連結與按鈕配置
- ✅ 多頁面架構：用 `?id=` query string 共用模板，避免複製貼上

### CSS3
- ✅ **CSS Variables**（custom properties）統一管理主題色
- ✅ **Flexbox** 處理 Hero、Navbar、Workflow Step 卡片內部排版
- ✅ **CSS Grid** 處理 Skills / Workflow / Projects 列表
- ✅ **Media Queries**：768px、480px 兩段 RWD 斷點
- ✅ `clamp()` 處理字體大小自適應
- ✅ **Backdrop Filter**（`backdrop-filter: blur(...)`）做玻璃效果
- ✅ **Linear Gradient** 文字漸層 + 滾動指示
- ✅ **Animation / Keyframes**：fadeUp、blink、scrollHint、skillFadeIn
- ✅ **Transition** 處理 hover 互動細節
- ✅ **Pseudo-elements**：`::before`、`::after` 製作下劃線、左側光條
- ✅ **Pseudo-classes**：`:hover` 細節互動

### JavaScript（Vanilla）
- ✅ **DOM 操作**：`document.getElementById`、`querySelectorAll`、`innerHTML`
- ✅ **URLSearchParams**：解析 query string 做動態渲染
- ✅ **IntersectionObserver**：滾動進場動畫，比 `scroll` 事件高效能
- ✅ **Canvas API**：粒子網路背景動畫
- ✅ **requestAnimationFrame**：60 FPS 動畫迴圈
- ✅ **Event Listener**：scroll、resize 事件處理
- ✅ **Template Literals**：動態 HTML 渲染
- ✅ **Array Methods**：`.map`、`.forEach`、`.join`

---

## 設計與 UX

- ✅ **科技風配色系統**：深色背景 + 青綠 / 紫色雙強調色
- ✅ **資訊架構**：把履歷拆成 About → Skills → Projects → Contact 的閱讀動線
- ✅ **層級表現**：用編號（`P/01`）、章節號（`01.`）強化階層感
- ✅ **互動回饋**：所有可點擊元素都有 hover state
- ✅ **載入流暢度**：用 fade-in / staggered animation 製造節奏感
- ✅ **行動裝置體驗**：手機版調整 padding、字體、grid 欄數

---

## 軟體工程實踐

- ✅ **DRY 原則**：技能 / 專案頁用單一模板 + 資料物件，而非複製 8 個 HTML
- ✅ **檔案結構**：HTML / CSS / JS 分離；同一份 CSS 與 JS 服務多個頁面
- ✅ **CSS 命名**：BEM-like 命名，避免樣式衝突（如 `.project-hero-name`）
- ✅ **可維護性**：所有顏色集中在 CSS Variables，換色只需改一處
- ✅ **可擴充性**：新增技能 / 專案只需在 JS 物件加一筆 + HTML 加一張卡

---

## 工具與環境

- ✅ **Git**：版本控制、commit message 撰寫
- ✅ **本機伺服器**：`python3 -m http.server` 預覽
- ✅ **瀏覽器 DevTools**：除錯、檢查 RWD 表現
- ✅ **Claude Code**：AI 輔助開發協作（詳見 [CLAUDE.md](./CLAUDE.md)）
- ✅ **Markdown**：撰寫專業文件（README、CHANGELOG 等）

---

## 跨領域連結

打造這個網站本身用到的技能，與我履歷上列出的其他能力如何呼應：

| 履歷技能 | 在這個 Lab 怎麼用到 |
| --- | --- |
| **Python** | 啟動本機 HTTP server 預覽網站 |
| **資料處理** | 把履歷內容結構化為 `SKILLS` / `PROJECTS` 物件 |
| **後端測試** | 手動測試各頁面 routing、RWD 斷點 |
| **Git** | 版本控制、追蹤每次重大變更 |
| **Docker** | （TODO）容器化部署到自架站台 |

---

## 我刻意「沒用」的東西（以及為什麼）

### 沒用前端框架
- **理由**：履歷網站是個小型應用，React / Vue 反而是 over-engineering。
- **好處**：載入快、無需建置流程、瀏覽器原生支援、面試官能直接看到我的純 JS 功力。

### 沒用 CSS framework（Tailwind / Bootstrap）
- **理由**：想練習自己寫 CSS，加深對 layout 與 animation 的理解。
- **好處**：CSS 檔案小、樣式自由度高、能展示對 CSS Grid / Flexbox 的掌握度。

### 沒用 SPA Router
- **理由**：用 URL `?id=` + 多個 HTML 即可達成同樣的效果。
- **好處**：SEO 友善、瀏覽器返回鍵原生可用、不需 `history.pushState`。

---

## 下次想練習的方向

詳見 [TODO.md](./TODO.md)，但主要包括：

- TypeScript 重寫 JS 邏輯
- 用 Vite / esbuild 加入打包流程
- 加入 Lighthouse 效能優化
- 國際化（i18n）：中英雙語切換
- 自動化部署：GitHub Actions

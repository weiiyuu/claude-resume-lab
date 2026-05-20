# 張維宇 · 個人線上履歷

> 一份用純 HTML / CSS / JavaScript 打造的科技風個人履歷網站，不依賴任何前端框架。

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 目錄

- [專案目的](#專案目的)
- [功能特色](#功能特色)
- [技術棧](#技術棧)
- [檔案結構](#檔案結構)
- [如何執行](#如何執行)
- [部署到 GitHub Pages](#部署到-github-pages)
- [客製化](#客製化)
- [延伸閱讀](#延伸閱讀)

---

## 專案目的

此專案是我用來：

- 在面試 / 實習投遞時，向對方展示完整的個人資訊與專案經驗。
- 練習從零開始用原生 Web 技術（不依賴 React / Vue）打造一個多頁面、有互動、有 RWD 的網站。
- 作為 Claude Code 協作流程的一個實際案例（詳見 [CLAUDE.md](./CLAUDE.md)）。

---

## 功能特色

### 主頁（`index.html`）
- **Hero 區**：漸層大字姓名 + 打字機效果輪播身分標籤
- **About**：背景與專長一目了然
- **Skills**：8 張可點擊技能卡，依分類標註
- **Projects**：3 個專案卡片，附技術 tag 與「查看完整介紹」按鈕
- **Contact**：仿 macOS 終端機介面呈現聯絡資訊

### 動態子頁
- **`skill.html?id=<skill-id>`**：技能詳細頁（簡介、做過什麼、工具、相關專案）
- **`project.html?id=<project-id>`**：專案詳細頁（概述、動機、系統流程、技術挑戰、技術棧、成果）

### 互動效果
- Canvas 粒子網路背景（自適應裝置大小）
- 滾動進場淡入動畫（IntersectionObserver）
- 固定導覽列、滾動時自動縮小
- 完整響應式設計（768px / 480px 兩段斷點）

---

## 技術棧

| 類別 | 使用技術 |
| --- | --- |
| 結構 | HTML5（語意化標籤、`<article>`、`<section>`） |
| 樣式 | CSS3（Grid、Flexbox、CSS Variables、`backdrop-filter`、`@keyframes`） |
| 互動 | Vanilla JavaScript（IntersectionObserver、Canvas API、URLSearchParams） |
| 字體 | 系統字體 + Monospace fallback chain |
| 工具 | Git、Claude Code |

> **0 個 npm 套件**、**0 個建置步驟**。只要瀏覽器就能跑。

---

## 檔案結構

```
.
├── index.html          # 主頁
├── skill.html          # 技能詳細頁模板（依 ?id= 動態渲染）
├── project.html        # 專案詳細頁模板（依 ?id= 動態渲染）
├── style.css           # 全站樣式
├── script.js           # 全站邏輯（打字機、粒子背景、頁面渲染）
│
├── README.md           # 你正在看的這份
├── CLAUDE.md           # 與 Claude Code 的協作流程紀錄
├── SKILL.md            # 本次 Lab 練習到的技能整理
├── TODO.md             # 待辦與改善項目
└── CHANGELOG.md        # 版本更新歷程
```

---

## 如何執行

### 方法 1：直接開啟（最簡單）

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### 方法 2：啟動本機 HTTP 伺服器（推薦）

某些瀏覽器對 `file://` 協定下的部分功能（例如 fetch、相對路徑）會有限制，建議用本機伺服器：

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```

然後打開 [http://localhost:8000](http://localhost:8000)。

---

## 部署到 GitHub Pages

只要靜態檔案，部署超簡單：

### Step 1. 推上 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo 名稱>.git
git push -u origin main
```

### Step 2. 開啟 GitHub Pages

1. 進入 repo 的 **Settings → Pages**
2. **Source** 選 `Deploy from a branch`
3. **Branch** 選 `main` / `(root)`
4. 點 **Save**

等約 1 分鐘，網站會發佈在：

```
https://<你的帳號>.github.io/<repo 名稱>/
```

> 若使用自訂網域，於 Pages 設定中填入 `Custom domain` 並設定 CNAME 即可。

---

## 客製化

### 換顏色 / 主題

修改 `style.css` 開頭的 CSS Variables：

```css
:root {
  --bg: #0a0e1a;          /* 背景色 */
  --accent: #64ffda;      /* 強調色 */
  --text: #d6e1ff;        /* 主文字 */
  --text-dim: #8892b0;    /* 次要文字 */
  --purple: #a78bfa;      /* 輔助強調色 */
}
```

### 新增技能 / 專案

- 技能：在 `script.js` 的 `SKILLS` 物件加一筆，並於 `index.html` 的 `.skills-grid` 加一張卡片
- 專案：在 `script.js` 的 `PROJECTS` 物件加一筆，並於 `index.html` 的 `.projects-list` 加一張卡片

### 更換打字機文字

修改 `script.js` 中的 `phrases` 陣列即可。

---

## 延伸閱讀

- [CLAUDE.md](./CLAUDE.md) — 本專案如何使用 Claude Code 協作完成
- [SKILL.md](./SKILL.md) — 本次 Lab 練習到的技術點整理
- [TODO.md](./TODO.md) — 尚未完成與可改善項目
- [CHANGELOG.md](./CHANGELOG.md) — 版本更新歷程

---

## 聯絡方式

- **Email**：claude@winlab.tw
- **背景**：輔仁大學統計資訊學系畢業 · AI 新秀計畫學員

---

<p align="center">
  © 2026 張維宇 · Built with HTML / CSS / JS · Crafted with the help of Claude Code.
</p>

# Changelog

本專案所有重要的變更都會記錄在這份檔案中。

格式參考 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.0.0/)，
版本控制遵循 [Semantic Versioning](https://semver.org/lang/zh-TW/)。

---

## [Unreleased]

### 待辦
- 補上 favicon、Open Graph meta 標籤
- 加入手機版漢堡選單
- 設定自訂網域（可選）

詳見 [TODO.md](./TODO.md)。

---

## [0.5.0] — 2026-05-20

### Deployed 🚀
- **正式部署上線**：[https://weiiyuu.github.io/claude-resume-lab/](https://weiiyuu.github.io/claude-resume-lab/)
- 透過 GitHub Pages 部署，使用 `main` 分支 `/(root)` 作為 source
- 自動啟用 HTTPS

### Changed
- `README.md` 新增「線上預覽」區塊與 Live Demo badge
- `README.md` 部署章節更新為「已部署」狀態
- `README.md` 聯絡方式補上線上履歷網址

---

## [0.4.0] — 2026-05-20

### Added
- 新增 `README.md`：完整專案說明，含執行方式與 GitHub Pages 部署教學
- 新增 `CLAUDE.md`：記錄與 Claude Code 的協作流程
- 新增 `SKILL.md`：整理本次 Lab 練習到的技術點
- 新增 `TODO.md`：列出尚未完成與未來可改善的項目
- 新增 `CHANGELOG.md`（本檔案）：版本更新紀錄

---

## [0.3.0] — 2026-05-20

### Added
- 新增 `project.html` 專案詳細頁模板
- 專案卡片右下角加入「查看完整介紹 →」按鈕，含位移 + 箭頭動畫
- 每個專案頁包含 6 個段落：
  - 專案概述（Overview）
  - 目標與動機（Goals）
  - 系統流程（Workflow）— 步驟卡片化呈現
  - 技術挑戰與解法（Challenges）— 為面試準備
  - 技術棧（Tech Stack）
  - 成果（Outcomes）— 用紫色星號強調
- 為 3 個專案建立完整內容資料：
  - `news-ai`：AI 自動化新聞分析系統
  - `denoising`：Calcium Imaging Denoising
  - `rag-lab`：RAG / GraphRAG Lab
- 「← 返回首頁」按鈕，可回到 `index.html#projects`

### Changed
- `script.js` 新增 `PROJECTS` 物件與動態渲染邏輯
- `style.css` 新增專案詳細頁樣式（含 workflow grid、紫色星號 outcomes）
- 手機版 RWD 補上專案頁適配

---

## [0.2.0] — 2026-05-20

### Added
- 新增 `skill.html` 技能詳細頁模板
- 主頁 8 張技能卡改為 `<a>` 連結，hover 顯示「查看詳情 →」
- 每個技能頁包含 4 個段落：
  - 簡介
  - 我做過什麼
  - 常用工具
  - 相關專案
- 為 8 個技能建立完整內容資料：
  - Python、LLM、RAG、n8n、資料處理、後端測試、Git、Docker
- 「← 返回首頁」膠囊型按鈕
- 找不到 id 時顯示 404 提示頁

### Changed
- `script.js` 新增 `SKILLS` 物件與動態渲染邏輯
- `style.css` 新增技能詳細頁樣式（含 hero、section、tools、highlights）
- 技能卡 CSS 改為支援 `<a>` 標籤的樣式（block + text-decoration: none）

---

## [0.1.0] — 2026-05-20

### Added
- 初始版本，包含三個檔案：`index.html`、`style.css`、`script.js`
- 主頁分為 4 個區段：
  - **Hero**：漸層大字姓名 + 打字機效果輪播
  - **Skills**：8 張技能卡片，依分類標註
  - **Projects**：3 張專案卡片，附技術 tag
  - **Contact**：仿 macOS 終端機介面
- 固定導覽列（Navbar），滾動時自動縮小 + 玻璃模糊效果
- Canvas 粒子網路背景動畫（自動依視窗大小調整粒子數）
- 滾動進場淡入動畫（IntersectionObserver）
- 完整響應式設計：768px / 480px 兩段斷點
- 深色科技風配色系統：
  - 主背景 `#0a0e1a`
  - 強調青綠 `#64ffda`
  - 輔助紫色 `#a78bfa`
- 動態 footer 年份（自動顯示當年）

### Tech Stack
- HTML5（語意化標籤）
- CSS3（Grid、Flexbox、CSS Variables、Animation）
- Vanilla JavaScript（IntersectionObserver、Canvas API）
- 0 個 npm 套件、0 個建置步驟

---

## 版本號規則

- **MAJOR**（x.0.0）：破壞性更新，例如完全重寫架構
- **MINOR**（0.x.0）：新增功能，向下相容
- **PATCH**（0.0.x）：bug 修復、樣式微調

由於目前還在 `0.x` 階段，部分 minor 版本可能會包含小幅破壞性變更。
進入 `1.0.0` 後將嚴格遵循 SemVer。

---

## 圖示說明

- **Added** — 新增的功能
- **Changed** — 既有功能的調整
- **Deprecated** — 即將移除的功能
- **Removed** — 已移除的功能
- **Fixed** — 修復的 bug
- **Security** — 與安全性相關的更新

/* ============================================
   Typed text effect for hero subtitle (index page only)
   ============================================ */
const typedEl = document.getElementById("typed");
if (typedEl) {
  const phrases = [
    "AI Engineer Intern",
    "LLM / RAG Developer",
    "Python Backend Builder",
    "Automation Enthusiast",
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeLoop() {
    const current = phrases[phraseIdx];

    if (!isDeleting) {
      typedEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
      setTimeout(typeLoop, 80);
    } else {
      typedEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(typeLoop, 300);
        return;
      }
      setTimeout(typeLoop, 40);
    }
  }
  typeLoop();
}

/* ============================================
   Skill detail page renderer
   ============================================ */
const SKILLS = {
  python: {
    name: "Python",
    icon: "{ }",
    category: "Programming Language",
    tagline: "我所有專案的核心語言。",
    description:
      "從學生時期至今，Python 是我最熟練、使用最頻繁的程式語言。從寫小腳本自動化日常工作，到組裝完整的資料 pipeline、串接 API、訓練 ML 模型，我都以 Python 為主要工具。",
    highlights: [
      "撰寫資料處理 Pipeline，從來源端抓取、清洗到輸出結構化資料",
      "使用 requests / httpx 串接多種第三方 API（LLM、新聞、資料庫）",
      "理解 asyncio 非同步程式設計，能處理大量 I/O 任務",
      "撰寫可測試、模組化的程式結構，搭配 pytest 進行驗證",
    ],
    tools: ["pandas", "numpy", "requests", "FastAPI", "pytest", "asyncio"],
    relatedProjects: ["AI 自動化新聞分析系統", "RAG / GraphRAG Lab"],
  },
  llm: {
    name: "LLM 應用",
    icon: "◈",
    category: "AI / Machine Learning",
    tagline: "讓大型語言模型實際解決問題。",
    description:
      "在 AI 新秀計畫中接觸 Gemini、OpenAI 等多種大型語言模型 API，學會把 LLM 從「玩具」變成可控、可重複、可量產的工具。",
    highlights: [
      "Prompt Engineering：分階段設計、Few-shot、Chain-of-Thought",
      "Structured Output：JSON Mode、Function Calling 取得可解析輸出",
      "Token 使用控管與成本估算，避免無謂消耗",
      "錯誤處理與 fallback：避免 LLM 回應失敗整個流程崩潰",
    ],
    tools: ["Gemini API", "OpenAI API", "Prompt Templates", "JSON Mode"],
    relatedProjects: ["AI 自動化新聞分析系統"],
  },
  rag: {
    name: "RAG / GraphRAG",
    icon: "⟁",
    category: "AI / Machine Learning",
    tagline: "讓 LLM 知道它原本不知道的事。",
    description:
      "從零開始實作檢索增強生成（Retrieval-Augmented Generation）流程，並進一步嘗試以知識圖譜輔助檢索的 GraphRAG，比較兩者在多跳問答（multi-hop QA）上的差異。",
    highlights: [
      "文件切分（chunking）策略：固定長度 vs. 語意切分",
      "Embedding 模型選擇與向量索引建立（Chroma）",
      "檢索策略：top-k、相似度閾值、re-ranking",
      "GraphRAG：以 Neo4j 儲存實體與關係，輔助跨文件推理",
      "使用 vLLM 提供高效能本地推論服務",
    ],
    tools: ["Embedding", "Chroma", "Neo4j", "vLLM", "LangChain"],
    relatedProjects: ["RAG / GraphRAG Lab"],
  },
  n8n: {
    name: "n8n 自動化",
    icon: "⚙",
    category: "Automation",
    tagline: "把重複的事情交給工作流。",
    description:
      "以 n8n 的視覺化流程設計，串接多個服務並建立可定時、可觸發、可監控的自動化任務，把 Python script 從「需要手動跑」變成「自己會跑」。",
    highlights: [
      "Workflow 設計：條件分支、迴圈、錯誤處理節點",
      "Webhook 觸發與定時排程（Cron）",
      "串接 LLM API、資料庫（Supabase）、通訊工具",
      "把 Python 子流程包裝為 HTTP 服務並讓 n8n 呼叫",
    ],
    tools: ["n8n", "Webhook", "Cron", "REST API"],
    relatedProjects: ["AI 自動化新聞分析系統"],
  },
  data: {
    name: "資料處理",
    icon: "▦",
    category: "Data Engineering",
    tagline: "從髒資料到可用資料。",
    description:
      "統計資訊背景出身，習慣處理各種格式不一、品質不一的原始資料，把它們轉成可分析、可入庫的結構化資料。",
    highlights: [
      "資料清洗：去重、缺失值處理、欄位標準化、編碼修正",
      "ETL 流程：抽取（Extract）、轉換（Transform）、載入（Load）",
      "處理半結構化資料（JSON、HTML、Markdown）",
      "搭配 SQL 與 Supabase 進行查詢與儲存",
    ],
    tools: ["pandas", "SQL", "Supabase", "JSON / CSV / HTML"],
    relatedProjects: ["AI 自動化新聞分析系統", "Calcium Imaging Denoising"],
  },
  testing: {
    name: "後端測試",
    icon: "✓",
    category: "Quality Assurance",
    tagline: "讓改動可以安心送出去。",
    description:
      "理解測試是維護程式可演化性的關鍵。從單元測試到整合測試，建立可重複執行的測試套件，讓重構與新功能不再是賭注。",
    highlights: [
      "Pytest：fixture、parametrize、mock、覆蓋率報告",
      "API endpoint 整合測試（含 happy path 與錯誤路徑）",
      "Mock 外部 API 與資料庫，讓測試快速且隔離",
      "理解 CI 中跑測試的時機與分層策略",
    ],
    tools: ["pytest", "unittest.mock", "FastAPI TestClient"],
    relatedProjects: ["AI 自動化新聞分析系統"],
  },
  git: {
    name: "Git",
    icon: "⎇",
    category: "DevOps / Collaboration",
    tagline: "團隊協作的最低共識。",
    description:
      "日常版本控制工具。除了基本的 add / commit / push，也熟悉分支策略、PR review、衝突排解等協作情境會用到的技能。",
    highlights: [
      "Feature branch + Pull Request workflow",
      "Rebase、cherry-pick、interactive rebase 整理 commit",
      "Conflict resolution 與 merge 策略選擇",
      "撰寫清楚的 commit message 與 PR 描述",
    ],
    tools: ["Git", "GitHub", "GitHub Actions（基礎）"],
    relatedProjects: ["所有專案"],
  },
  docker: {
    name: "Docker",
    icon: "▢",
    category: "DevOps / Infrastructure",
    tagline: "讓「在我電腦能跑」不再是藉口。",
    description:
      "用容器化解決環境差異問題。能撰寫 Dockerfile、用 docker compose 編排多服務本地開發環境，並理解 image 大小最佳化的基本技巧。",
    highlights: [
      "Dockerfile 撰寫：base image 選擇、layer 設計、cache 利用",
      "Multi-stage build 減小最終 image 體積",
      "docker compose 編排多服務（app + db + vector store）",
      "理解容器與主機間的網路、volume 機制",
    ],
    tools: ["Docker", "docker compose", "Dockerfile"],
    relatedProjects: ["RAG / GraphRAG Lab"],
  },
};

const skillRoot = document.getElementById("skill-content");
if (skillRoot) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = SKILLS[id];

  if (!data) {
    skillRoot.innerHTML = `
      <div class="skill-not-found">
        <h1>404</h1>
        <p>找不到這個技能項目。</p>
        <a href="index.html#skills" class="btn btn-primary">回到技能列表</a>
      </div>
    `;
  } else {
    document.getElementById("page-title").textContent = `${data.name} | 張維宇`;

    skillRoot.innerHTML = `
      <header class="skill-hero">
        <div class="skill-hero-icon">${data.icon}</div>
        <div class="skill-hero-meta">
          <span class="skill-hero-category">${data.category}</span>
          <h1 class="skill-hero-name">${data.name}</h1>
          <p class="skill-hero-tagline">${data.tagline}</p>
        </div>
      </header>

      <section class="skill-section">
        <h2 class="skill-section-title"><span class="num">01.</span> 簡介</h2>
        <p class="skill-text">${data.description}</p>
      </section>

      <section class="skill-section">
        <h2 class="skill-section-title"><span class="num">02.</span> 我做過什麼</h2>
        <ul class="skill-highlights">
          ${data.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </section>

      <section class="skill-section">
        <h2 class="skill-section-title"><span class="num">03.</span> 常用工具</h2>
        <ul class="skill-tools">
          ${data.tools.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </section>

      <section class="skill-section">
        <h2 class="skill-section-title"><span class="num">04.</span> 相關專案</h2>
        <ul class="skill-projects">
          ${data.relatedProjects
            .map((p) => `<li><a href="index.html#projects">▸ ${p}</a></li>`)
            .join("")}
        </ul>
      </section>

      <div class="skill-footer-cta">
        <a href="index.html#skills" class="btn btn-outline">← 返回技能列表</a>
        <a href="index.html#contact" class="btn btn-primary">聯絡我</a>
      </div>
    `;
  }
}

/* ============================================
   Project detail page renderer
   ============================================ */
const PROJECTS = {
  "news-ai": {
    index: "P/01",
    name: "AI 自動化新聞分析系統",
    subtitle: "從蒐集、分析到報告的全自動 Pipeline",
    period: "AI 新秀計畫期間",
    role: "獨立開發者",
    overview:
      "整合 Python、n8n 自動化平台、Gemini LLM 與 Supabase，建立一條每日自動運行的新聞處理流水線。從多個來源蒐集當日新聞，透過 LLM 進行分類、摘要與情緒分析，最後寫入資料庫並產出結構化日報。",
    goals: [
      "解決手動瀏覽多個新聞來源造成的時間浪費",
      "讓 LLM 的「分析能力」變成可重複、可排程的服務",
      "建立資料庫累積長期語料，作為後續分析基礎",
    ],
    workflow: [
      { step: "1", title: "定時觸發", desc: "n8n Cron 節點每日固定時間啟動工作流" },
      { step: "2", title: "新聞蒐集", desc: "Python 爬蟲 / API 抓取多個新聞來源" },
      { step: "3", title: "去重與清洗", desc: "依標題與連結雜湊去除重複文章" },
      { step: "4", title: "LLM 分析", desc: "Gemini API 進行分類、摘要、關鍵字抽取" },
      { step: "5", title: "寫入資料庫", desc: "結構化欄位存入 Supabase" },
      { step: "6", title: "報告產出", desc: "依分類組合成日報並通知" },
    ],
    challenges: [
      "LLM 輸出格式不穩定 → 用 JSON Mode + Pydantic 驗證解析",
      "API 限速問題 → 加入 retry 與 batch 控制",
      "新聞重複問題 → 雜湊 + 模糊比對機制",
      "n8n 與 Python 邏輯分工 → 把可重用邏輯封裝為 HTTP 服務",
    ],
    techStack: [
      "Python",
      "n8n",
      "Gemini API",
      "Supabase",
      "PostgreSQL",
      "Webhook",
      "Cron",
    ],
    outcomes: [
      "每日自動產出結構化新聞日報",
      "可水平擴充加入新的新聞來源與 LLM 任務",
      "建立可追蹤的執行歷史與錯誤通報機制",
    ],
  },

  denoising: {
    index: "P/02",
    name: "Calcium Imaging Denoising",
    subtitle: "用 U-Net 還原螢光顯微影像中的微弱訊號",
    period: "研究專題",
    role: "模型訓練與評估",
    overview:
      "鈣離子影像在低光環境下訊號微弱、雜訊強烈，影響後續的神經活動分析。本專題使用 2D 與 3D U-Net 模型對影像進行去噪，透過 patch-based training 處理大體積資料，並使用 sSNR、tSNR、stSNR 等指標客觀評估還原效果。",
    goals: [
      "理解深度學習在生物影像處理上的應用",
      "比較 2D 與 3D 卷積在時空資料上的差異",
      "建立可量化評估的去噪流程",
    ],
    workflow: [
      { step: "1", title: "資料準備", desc: "讀取顯微影像序列，標準化亮度與對比" },
      { step: "2", title: "Patch 切分", desc: "將大體積資料切成可訓練的小區塊" },
      { step: "3", title: "模型建構", desc: "2D U-Net 處理單張影像、3D U-Net 利用時間資訊" },
      { step: "4", title: "訓練", desc: "Noise2Noise / Noise2Void 等自監督策略" },
      { step: "5", title: "評估", desc: "計算 sSNR（空間）、tSNR（時間）、stSNR（時空）" },
    ],
    challenges: [
      "3D 體積資料記憶體爆量 → patch-based training + 漸進式載入",
      "缺乏乾淨 ground truth → 自監督學習策略",
      "評估指標的選擇與意義 → 區分空間、時間、時空三種觀點",
      "訓練時間長 → 學習如何設計實驗以節省迭代時間",
    ],
    techStack: [
      "PyTorch",
      "U-Net",
      "2D / 3D CNN",
      "Patch Training",
      "NumPy",
      "sSNR / tSNR / stSNR",
    ],
    outcomes: [
      "完整理解 U-Net 架構與 encoder-decoder skip connection 原理",
      "建立自己的評估腳本，可重複比較不同模型",
      "獲得處理大型科學影像資料的實務經驗",
    ],
  },

  "rag-lab": {
    index: "P/03",
    name: "RAG / GraphRAG Lab",
    subtitle: "比較傳統檢索與圖譜輔助檢索的差異",
    period: "AI 新秀計畫期間",
    role: "獨立開發者",
    overview:
      "從零開始實作完整的 RAG 流程，並進一步把知識圖譜（GraphRAG）作為對照組，比較兩者在多跳問答、跨文件推理上的差異。涵蓋文件處理、embedding、向量索引、檢索、LLM 回答的全套 pipeline。",
    goals: [
      "親手實作 RAG 各個環節，而非只是套用框架",
      "理解 GraphRAG 為何能解決傳統 RAG 在多跳問答上的弱點",
      "用 vLLM 體驗本地高效能推論部署",
    ],
    workflow: [
      { step: "1", title: "資料處理", desc: "文件清洗、chunking 策略比較（固定 vs. 語意）" },
      { step: "2", title: "Embedding", desc: "選擇合適的 embedding 模型編碼文字片段" },
      { step: "3", title: "向量索引", desc: "Chroma 儲存向量，支援相似度檢索" },
      { step: "4", title: "知識圖譜", desc: "Neo4j 儲存實體與關係，做為 GraphRAG 檢索基底" },
      { step: "5", title: "檢索", desc: "Top-k 相似度檢索 + re-ranking" },
      { step: "6", title: "生成", desc: "vLLM 提供本地 LLM 推論，整合檢索結果生成答案" },
    ],
    challenges: [
      "Chunking 策略對結果影響大 → 比較固定長度與語意切分",
      "Embedding 模型選擇 → 從多個開源模型中實測比較",
      "GraphRAG 圖譜建構 → LLM 抽取實體與關係的品質控管",
      "vLLM 部署與資源配置 → 理解 GPU memory 與 batch 大小的權衡",
    ],
    techStack: [
      "Python",
      "Embedding",
      "Chroma",
      "Neo4j",
      "vLLM",
      "LangChain",
      "Docker",
    ],
    outcomes: [
      "完整跑通 RAG 與 GraphRAG 兩種流程",
      "理解多跳問答情境下 GraphRAG 的優勢",
      "獲得本地部署 LLM 推論服務的實務經驗",
    ],
  },
};

const projectRoot = document.getElementById("project-content");
if (projectRoot) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = PROJECTS[id];

  if (!data) {
    projectRoot.innerHTML = `
      <div class="skill-not-found">
        <h1>404</h1>
        <p>找不到這個專案。</p>
        <a href="index.html#projects" class="btn btn-primary">回到專案列表</a>
      </div>
    `;
  } else {
    document.getElementById("page-title").textContent = `${data.name} | 張維宇`;

    projectRoot.innerHTML = `
      <header class="project-hero">
        <div class="project-hero-index">${data.index}</div>
        <h1 class="project-hero-name">${data.name}</h1>
        <p class="project-hero-subtitle">${data.subtitle}</p>
        <div class="project-meta">
          <div class="project-meta-item">
            <span class="meta-label">期間</span>
            <span class="meta-value">${data.period}</span>
          </div>
          <div class="project-meta-item">
            <span class="meta-label">角色</span>
            <span class="meta-value">${data.role}</span>
          </div>
        </div>
      </header>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">01.</span> 專案概述</h2>
        <p class="project-text">${data.overview}</p>
      </section>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">02.</span> 目標與動機</h2>
        <ul class="project-bullets">
          ${data.goals.map((g) => `<li>${g}</li>`).join("")}
        </ul>
      </section>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">03.</span> 系統流程</h2>
        <div class="workflow-grid">
          ${data.workflow
            .map(
              (w) => `
            <div class="workflow-step">
              <div class="workflow-step-num">${w.step}</div>
              <div class="workflow-step-body">
                <h4>${w.title}</h4>
                <p>${w.desc}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">04.</span> 技術挑戰與解法</h2>
        <ul class="project-bullets">
          ${data.challenges.map((c) => `<li>${c}</li>`).join("")}
        </ul>
      </section>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">05.</span> 技術棧</h2>
        <ul class="skill-tools">
          ${data.techStack.map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </section>

      <section class="project-section">
        <h2 class="project-section-title"><span class="num">06.</span> 成果</h2>
        <ul class="project-bullets project-outcomes">
          ${data.outcomes.map((o) => `<li>${o}</li>`).join("")}
        </ul>
      </section>

      <div class="skill-footer-cta">
        <a href="index.html#projects" class="btn btn-outline">← 返回專案列表</a>
        <a href="index.html#contact" class="btn btn-primary">聯絡我</a>
      </div>
    `;
  }
}

/* ============================================
   Navbar scroll state
   ============================================ */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ============================================
   Reveal-on-scroll animation
   ============================================ */
const revealTargets = document.querySelectorAll(
  ".skill-card, .project-card, .section-header, .contact-box"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => io.observe(el));

/* ============================================
   Footer year
   ============================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================
   Background canvas — animated particle network
   ============================================ */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

const particles = [];
const PARTICLE_COUNT = Math.min(
  80,
  Math.floor((width * height) / 18000)
);
const LINK_DIST = 130;

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.r = Math.random() * 1.6 + 0.6;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(100, 255, 218, 0.55)";
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function drawLinks() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.25;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 255, 218, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  drawLinks();
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

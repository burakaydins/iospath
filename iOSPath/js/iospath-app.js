const state = {
  progress: sanitizeProgress(ProgressStorage.load()),
  currentQuestionIndex: 0,
  resourceFilter: "all",
  resourceSearch: "",
  showFavoriteResources: false,
  roadmapSearch: "",
  roadmapStatusFilter: "all",
  roadmapLevelFilter: "all",
  questionCategoryFilter: "all",
  questionLevelFilter: "all",
  showAnswer: true
};

const elements = {
  progressPercent: document.querySelector("#progressPercent"),
  progressBar: document.querySelector("#progressBar"),
  completedCount: document.querySelector("#completedCount"),
  portfolioStatus: document.querySelector("#portfolioStatus"),
  nextStep: document.querySelector("#nextStep"),
  dashboardInsights: document.querySelector("#dashboardInsights"),
  badgeGrid: document.querySelector("#badgeGrid"),
  skillTree: document.querySelector("#skillTree"),
  topicList: document.querySelector("#topicList"),
  roadmapSearch: document.querySelector("#roadmapSearch"),
  roadmapStatusFilter: document.querySelector("#roadmapStatusFilter"),
  roadmapLevelFilter: document.querySelector("#roadmapLevelFilter"),
  roadmapResultCount: document.querySelector("#roadmapResultCount"),
  resourceFilter: document.querySelector("#resourceFilter"),
  resourceSearch: document.querySelector("#resourceSearch"),
  favoriteResourceToggle: document.querySelector("#favoriteResourceToggle"),
  resourceGrid: document.querySelector("#resourceGrid"),
  questionLevel: document.querySelector("#questionLevel"),
  questionCategory: document.querySelector("#questionCategory"),
  questionTitle: document.querySelector("#questionTitle"),
  questionAnswer: document.querySelector("#questionAnswer"),
  nextQuestionButton: document.querySelector("#nextQuestionButton"),
  toggleAnswerButton: document.querySelector("#toggleAnswerButton"),
  knownQuestionButton: document.querySelector("#knownQuestionButton"),
  reviewQuestionButton: document.querySelector("#reviewQuestionButton"),
  questionCategoryFilter: document.querySelector("#questionCategoryFilter"),
  questionLevelFilter: document.querySelector("#questionLevelFilter"),
  questionTotal: document.querySelector("#questionTotal"),
  activeFilterLabel: document.querySelector("#activeFilterLabel"),
  interviewScore: document.querySelector("#interviewScore"),
  interviewPerformance: document.querySelector("#interviewPerformance"),
  questionList: document.querySelector("#questionList"),
  portfolioList: document.querySelector("#portfolioList"),
  portfolioReport: document.querySelector("#portfolioReport"),
  copyPortfolioButton: document.querySelector("#copyPortfolioButton"),
  downloadPortfolioButton: document.querySelector("#downloadPortfolioButton"),
  themeToggle: document.querySelector("#themeToggle")
};

const THEME_KEY = "iospath-theme";

function getPreferredTheme() {
  try {
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
  } catch (error) {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  if (!elements.themeToggle) {
    return;
  }

  const isDark = theme === "dark";
  elements.themeToggle.setAttribute("aria-pressed", String(isDark));
  elements.themeToggle.setAttribute("title", isDark ? "Açık temaya geç" : "Koyu temaya geç");
  elements.themeToggle.setAttribute("aria-label", isDark ? "Açık temaya geç" : "Koyu temaya geç");
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  try {
    localStorage.setItem(THEME_KEY, nextTheme);
  } catch (error) {
    // Theme choice is optional; ignore storage failures.
  }

  applyTheme(nextTheme);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function resourceId(resource) {
  return resource.url;
}

function questionId(question) {
  return `${question.category}|${question.level}|${question.title}`;
}

function normalizeProjectUrl(value) {
  const trimmed = value.trim();

  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function isValidProjectUrl(value) {
  const normalized = normalizeProjectUrl(value);

  if (!normalized) {
    return true;
  }

  try {
    const url = new URL(normalized);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch (error) {
    return false;
  }
}

function sanitizeProgress(progress) {
  const validTopicIds = new Set(IOSPATH_DATA.topics.map((topic) => topic.id));
  const validResourceIds = new Set(IOSPATH_DATA.resources.map(resourceId));
  const validQuestionIds = new Set(IOSPATH_DATA.questions.map(questionId));
  const githubLinks = {};
  const topicNotes = {};

  Object.entries(progress.githubLinks || {}).forEach(([topicId, url]) => {
    if (validTopicIds.has(topicId) && typeof url === "string" && isValidProjectUrl(url)) {
      githubLinks[topicId] = normalizeProjectUrl(url);
    }
  });

  Object.entries(progress.topicNotes || {}).forEach(([topicId, note]) => {
    if (validTopicIds.has(topicId) && typeof note === "string") {
      topicNotes[topicId] = note.slice(0, 600);
    }
  });

  const completedTopicIds = Array.isArray(progress.completedTopicIds)
    ? progress.completedTopicIds.filter((topicId) => validTopicIds.has(topicId))
    : [];
  const favoriteResources = Array.isArray(progress.favoriteResources)
    ? progress.favoriteResources.filter((id) => validResourceIds.has(id))
    : [];
  const knownIds = Array.isArray(progress.questionStats?.knownIds)
    ? progress.questionStats.knownIds.filter((id) => validQuestionIds.has(id))
    : [];
  const reviewIds = Array.isArray(progress.questionStats?.reviewIds)
    ? progress.questionStats.reviewIds.filter((id) => validQuestionIds.has(id))
    : [];

  return {
    completedTopicIds: [...new Set(completedTopicIds)],
    githubLinks,
    topicNotes,
    favoriteResources: [...new Set(favoriteResources)],
    questionStats: {
      knownIds: [...new Set(knownIds)],
      reviewIds: [...new Set(reviewIds)]
    }
  };
}

function isCompleted(topicId) {
  return state.progress.completedTopicIds.includes(topicId);
}

function isUnlocked(topic) {
  return !topic.dependency || isCompleted(topic.dependency);
}

function saveAndRender() {
  ProgressStorage.save(state.progress);
  renderApp();
}

function toggleTopic(topicId) {
  const topic = IOSPATH_DATA.topics.find((item) => item.id === topicId);

  if (!topic || !isUnlocked(topic)) {
    return;
  }

  if (isCompleted(topicId)) {
    state.progress.completedTopicIds = state.progress.completedTopicIds.filter((id) => id !== topicId);
  } else {
    state.progress.completedTopicIds.push(topicId);
  }

  saveAndRender();
}

function saveProjectLink(topicId, value) {
  const topic = IOSPATH_DATA.topics.find((item) => item.id === topicId);
  const normalized = normalizeProjectUrl(value);

  if (!topic || !isUnlocked(topic)) {
    return;
  }

  if (!isValidProjectUrl(normalized)) {
    window.alert("Lütfen geçerli bir GitHub veya proje linki gir.");
    return;
  }

  if (normalized) {
    state.progress.githubLinks[topicId] = normalized;
  } else {
    delete state.progress.githubLinks[topicId];
  }

  saveAndRender();
}

function saveTopicNote(topicId, value) {
  const topic = IOSPATH_DATA.topics.find((item) => item.id === topicId);

  if (!topic || !isUnlocked(topic)) {
    return;
  }

  const note = value.trim().slice(0, 600);

  if (note) {
    state.progress.topicNotes[topicId] = note;
  } else {
    delete state.progress.topicNotes[topicId];
  }

  saveAndRender();
}

function toggleResourceFavorite(id) {
  const favorites = new Set(state.progress.favoriteResources);

  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  state.progress.favoriteResources = [...favorites];
  saveAndRender();
}

function getFilteredTopics() {
  const search = state.roadmapSearch.trim().toLocaleLowerCase("tr");

  return IOSPATH_DATA.topics.filter((topic) => {
    const status = getTopicStatus(topic);
    const searchable = [
      topic.title,
      topic.area,
      topic.level,
      topic.description,
      topic.lesson,
      topic.project,
      topic.source
    ].join(" ").toLocaleLowerCase("tr");
    const searchMatches = !search || searchable.includes(search);
    const statusMatches = state.roadmapStatusFilter === "all" || status === state.roadmapStatusFilter;
    const levelMatches = state.roadmapLevelFilter === "all" || topic.level === state.roadmapLevelFilter;

    return searchMatches && statusMatches && levelMatches;
  });
}

function getCurrentQuestion() {
  const questions = getFilteredQuestions();
  return questions[state.currentQuestionIndex] || questions[0] || IOSPATH_DATA.questions[0];
}

function markCurrentQuestion(result) {
  const question = getCurrentQuestion();

  if (!question) {
    return;
  }

  const id = questionId(question);
  const known = new Set(state.progress.questionStats.knownIds);
  const review = new Set(state.progress.questionStats.reviewIds);

  if (result === "known") {
    known.add(id);
    review.delete(id);
  } else {
    review.add(id);
    known.delete(id);
  }

  state.progress.questionStats.knownIds = [...known];
  state.progress.questionStats.reviewIds = [...review];
  saveAndRender();
}

function getUnlockedBadges() {
  const completedCount = state.progress.completedTopicIds.length;
  const linkedCount = Object.keys(state.progress.githubLinks).length;
  const notesCount = Object.keys(state.progress.topicNotes).length;
  const favoritesCount = state.progress.favoriteResources.length;
  const knownCount = state.progress.questionStats.knownIds.length;
  const completedAreas = new Set(
    IOSPATH_DATA.topics
      .filter((topic) => isCompleted(topic.id))
      .map((topic) => topic.area)
  );
  const completedLevels = new Set(
    IOSPATH_DATA.topics
      .filter((topic) => isCompleted(topic.id))
      .map((topic) => topic.level)
  );

  return [
    {
      id: "starter",
      title: "Başlangıç Hazır",
      description: "İlk 3 rota modülünü tamamla.",
      unlocked: completedCount >= 3
    },
    {
      id: "swift-builder",
      title: "Swift Builder",
      description: "Swift ve SwiftUI alanlarında ilerleme kaydet.",
      unlocked: completedAreas.has("Swift") && completedAreas.has("SwiftUI")
    },
    {
      id: "portfolio-proof",
      title: "Portfolyo Kanıtı",
      description: "En az 3 GitHub/proje linki ekle.",
      unlocked: linkedCount >= 3
    },
    {
      id: "note-keeper",
      title: "Öğrenme Günlüğü",
      description: "En az 5 rota notu oluştur.",
      unlocked: notesCount >= 5
    },
    {
      id: "resource-curator",
      title: "Kaynak Küratörü",
      description: "En az 5 kaynağı favorilere ekle.",
      unlocked: favoritesCount >= 5
    },
    {
      id: "interview-ready",
      title: "Interview Ready",
      description: "En az 20 mülakat sorusunu bildim olarak işaretle.",
      unlocked: knownCount >= 20
    },
    {
      id: "advanced-track",
      title: "İleri Seviye Rota",
      description: "İleri seviye modüllerden en az birini tamamla.",
      unlocked: completedLevels.has("İleri")
    },
    {
      id: "final-ready",
      title: "Finale Hazır",
      description: "Tüm rotayı tamamla.",
      unlocked: completedCount === IOSPATH_DATA.topics.length
    }
  ];
}

function getPortfolioReportText() {
  const total = IOSPATH_DATA.topics.length;
  const completedTopics = IOSPATH_DATA.topics.filter((topic) => isCompleted(topic.id));
  const linkedTopics = completedTopics.filter((topic) => state.progress.githubLinks[topic.id]);
  const notesCount = Object.keys(state.progress.topicNotes).length;
  const knownCount = state.progress.questionStats.knownIds.length;
  const reviewCount = state.progress.questionStats.reviewIds.length;
  const badges = getUnlockedBadges().filter((badge) => badge.unlocked);

  return [
    "iOSPath Final Portfolyo Özeti",
    "",
    `Genel ilerleme: ${completedTopics.length}/${total}`,
    `GitHub/proje kanıtı eklenen modül: ${linkedTopics.length}`,
    `Rota notu sayısı: ${notesCount}`,
    `Favori kaynak sayısı: ${state.progress.favoriteResources.length}`,
    `Mülakatta bilinen soru: ${knownCount}`,
    `Tekrar çalışılacak soru: ${reviewCount}`,
    `Kazanılan rozetler: ${badges.length ? badges.map((badge) => badge.title).join(", ") : "Henüz yok"}`,
    "",
    "Tamamlanan Modüller:",
    ...completedTopics.map((topic) => {
      const link = state.progress.githubLinks[topic.id] ? ` - ${state.progress.githubLinks[topic.id]}` : "";
      return `- ${topic.title}${link}`;
    })
  ].join("\n");
}

function getTopicStatus(topic) {
  if (isCompleted(topic.id)) {
    return "Tamamlandı";
  }

  if (isUnlocked(topic)) {
    return "Açık";
  }

  return "Kilitli";
}

function renderListItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderChecklistSteps(items) {
  return items.map((item, index) => `
    <li>
      <span>Aşama ${index + 1}</span>
      <p>${item}</p>
    </li>
  `).join("");
}

function renderLessonModules(topic) {
  const modules = topic.modules || IOSPATH_DATA.curriculum[topic.id] || [];

  if (!modules.length) {
    return "";
  }

  return `
    <div class="curriculum-box">
      <h4>Eğitim İçeriği</h4>
      <div class="lesson-module-list">
        ${modules.map((module, index) => `
          <article class="lesson-module">
            <span>Ders ${index + 1}</span>
            <h5>${module.title}</h5>
            <p>${module.content}</p>
            <strong>Öğrenme Notu:</strong>
            <p>${module.note}</p>
            <strong>Uygulama:</strong>
            <p>${module.practice}</p>
            <strong>Kontrol Sorusu:</strong>
            <p>${module.question}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTopicSummary(topic) {
  const items = [
    ["Süre", topic.duration],
    ["Odak", topic.focus],
    ["Kaynak", topic.source],
    ["Kanıt", topic.evidence]
  ].filter(([, value]) => Boolean(value));

  if (!items.length) {
    return "";
  }

  return `
    <div class="topic-summary">
      ${items.map(([label, value]) => `
        <div>
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTopicVideo(topic) {
  if (!topic.videoTitle || !topic.videoUrl) {
    return "";
  }

  return `
    <div class="video-source">
      <div>
        <span>Video Kaynağı</span>
        <strong>${topic.videoTitle}</strong>
      </div>
      <a href="${topic.videoUrl}" target="_blank" rel="noopener noreferrer">Videoyu Aç</a>
    </div>
  `;
}

function renderDashboard() {
  if (!elements.progressPercent) {
    return;
  }

  const total = IOSPATH_DATA.topics.length;
  const completed = state.progress.completedTopicIds.length;
  const percent = Math.round((completed / total) * 100);
  const nextTopic = IOSPATH_DATA.topics.find((topic) => !isCompleted(topic.id) && isUnlocked(topic));
  const completedTopics = IOSPATH_DATA.topics.filter((topic) => isCompleted(topic.id));
  const lastCompletedTopic = completedTopics.at(-1);
  const linkedCount = Object.keys(state.progress.githubLinks).length;
  const notesCount = Object.keys(state.progress.topicNotes).length;
  const portfolioPercent = Math.round(((completed + linkedCount) / (total * 2)) * 100);

  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
  elements.completedCount.textContent = `${completed}/${total}`;
  elements.portfolioStatus.textContent = portfolioPercent >= 80 ? "Güçlü" : percent === 100 ? "Hazır" : "Devam";
  elements.nextStep.textContent = nextTopic ? nextTopic.title : "Rota Tamamlandı";

  if (elements.dashboardInsights) {
    const beginnerDone = completedTopics.filter((topic) => topic.level === "Başlangıç").length;
    const midDone = completedTopics.filter((topic) => topic.level === "Orta").length;
    const advancedDone = completedTopics.filter((topic) => topic.level === "İleri").length;

    elements.dashboardInsights.innerHTML = `
      <article>
        <span>Seviye Dağılımı</span>
        <strong>${beginnerDone} / ${midDone} / ${advancedDone}</strong>
        <p>Başlangıç, orta ve ileri modüllerde tamamlanan konu sayısı.</p>
      </article>
      <article>
        <span>Portfolyo Kanıtı</span>
        <strong>${linkedCount}</strong>
        <p>GitHub veya proje linki eklenen öğrenme adımı.</p>
      </article>
      <article>
        <span>Öğrenme Notu</span>
        <strong>${notesCount}</strong>
        <p>Rota üzerinde yazılan kişisel gelişim notu.</p>
      </article>
      <article>
        <span>Son Tamamlanan</span>
        <strong>${lastCompletedTopic ? lastCompletedTopic.title : "Henüz yok"}</strong>
        <p>En son tamamlandı işaretlenen rota modülü.</p>
      </article>
    `;
  }
}

function renderBadges() {
  if (!elements.badgeGrid) {
    return;
  }

  const badges = getUnlockedBadges();

  elements.badgeGrid.innerHTML = badges.map((badge) => `
    <article class="badge-card ${badge.unlocked ? "is-unlocked" : "is-locked"}">
      <span>${badge.unlocked ? "Açıldı" : "Kilitli"}</span>
      <strong>${badge.title}</strong>
      <p>${badge.description}</p>
    </article>
  `).join("");
}

function renderSkillTree() {
  if (!elements.skillTree) {
    return;
  }

  const sections = [...new Set(IOSPATH_DATA.topics.map((topic) => topic.area))];

  elements.skillTree.innerHTML = sections.map((section) => {
    const sectionTopics = IOSPATH_DATA.topics.filter((topic) => topic.area === section);
    const completedCount = sectionTopics.filter((topic) => isCompleted(topic.id)).length;
    const hasOpenTopic = sectionTopics.some((topic) => isUnlocked(topic) && !isCompleted(topic.id));
    const isDone = completedCount === sectionTopics.length;
    const statusClass = isDone ? "is-done" : hasOpenTopic ? "is-open" : "";
    const statusText = isDone ? "✓" : hasOpenTopic ? "Açık" : "Kilit";

    return `
      <div class="tree-item ${statusClass}">
        <span>${section}</span>
        <span>${statusText}</span>
      </div>
    `;
  }).join("");
}

function renderTopics() {
  if (!elements.topicList) {
    return;
  }

  let previousArea = "";
  const topics = getFilteredTopics();

  if (elements.roadmapResultCount) {
    elements.roadmapResultCount.textContent = `${topics.length} modül`;
  }

  if (!topics.length) {
    elements.topicList.innerHTML = "<p class=\"empty-state\">Bu filtreye uygun rota modülü bulunamadı.</p>";
    return;
  }

  elements.topicList.innerHTML = topics.map((topic) => {
    const index = IOSPATH_DATA.topics.findIndex((item) => item.id === topic.id);
    const unlocked = isUnlocked(topic);
    const completed = isCompleted(topic.id);
    const status = getTopicStatus(topic);
    const statusClass = completed ? "done" : unlocked ? "open" : "locked";
    const cardClass = completed ? "is-done" : unlocked ? "is-open" : "is-locked";
    const projectLink = state.progress.githubLinks[topic.id] || "";
    const topicNote = state.progress.topicNotes[topic.id] || "";
    const sectionLabel = topic.area !== previousArea
      ? `<div class="path-section-label"><span>${topic.area}</span></div>`
      : "";

    previousArea = topic.area;

    return `
      ${sectionLabel}
      <article class="topic-card ${cardClass}">
        <div class="path-marker" aria-hidden="true">
          <span>${index + 1}</span>
        </div>
        <div class="topic-main">
          <div class="topic-meta">
            <span class="tag ${statusClass}">${status}</span>
            <span class="tag">${topic.area}</span>
            <span class="tag">${topic.level}</span>
            ${topic.duration ? `<span class="tag">${topic.duration}</span>` : ""}
          </div>
          <h3>${topic.title}</h3>
          <p>${topic.description}</p>
          ${renderTopicSummary(topic)}
          ${renderTopicVideo(topic)}
          <div class="lesson-box">
            <h4>Konu İçeriği</h4>
            <p>${topic.lesson}</p>
          </div>
          ${renderLessonModules(topic)}
          <div class="topic-detail-grid">
            <div>
              <h4>Kazanımlar</h4>
              <ul class="detail-list">${renderListItems(topic.outcomes)}</ul>
            </div>
            <div>
              <h4>Aşamalı Kontrol Listesi</h4>
              <ol class="staged-list">${renderChecklistSteps(topic.checklist)}</ol>
            </div>
          </div>
          <div class="code-example">
            <span>Örnek Kod</span>
            <pre><code>${topic.exampleCode}</code></pre>
          </div>
          <p><strong>Mini proje:</strong> ${topic.project}</p>
          ${topic.evidence ? `<p><strong>Portfolyo kanıtı:</strong> ${topic.evidence}</p>` : ""}
        </div>
        <div class="topic-actions">
          <div class="action-note">
            <strong>${completed ? "Bu adım tamamlandı" : unlocked ? "Bu adım aktif" : "Önce önceki adımı tamamla"}</strong>
            <p>${completed ? "Sıradaki modüle geçebilirsin." : unlocked ? "Dersleri tamamlayıp kontrol listesini uygula." : "Bağımlı ilerleme sistemi bu modülü kilitli tutuyor."}</p>
          </div>
          <div class="project-link-box">
            <label for="github-${topic.id}">GitHub / proje kanıt linki</label>
            <input
              class="github-input"
              id="github-${topic.id}"
              type="url"
              placeholder="github.com/kullanici/proje"
              value="${escapeHtml(projectLink)}"
              data-github-input="${topic.id}"
              ${unlocked ? "" : "disabled"}
            >
            <button class="ghost-button" data-save-github="${topic.id}" type="button" ${unlocked ? "" : "disabled"}>
              Linki Kaydet
            </button>
            ${projectLink ? `<a class="saved-project-link" href="${escapeHtml(projectLink)}" target="_blank" rel="noopener noreferrer">Kaydedilen Kanıtı Aç</a>` : ""}
          </div>
          <div class="project-link-box">
            <label for="note-${topic.id}">Bu adım için öğrenme notu</label>
            <textarea
              class="topic-note-input"
              id="note-${topic.id}"
              rows="5"
              maxlength="600"
              placeholder="Bu konuda öğrendiklerin, zorlandığın nokta veya tekrar bakacağın kaynak..."
              data-topic-note="${topic.id}"
              ${unlocked ? "" : "disabled"}
            >${escapeHtml(topicNote)}</textarea>
            <button class="ghost-button" data-save-note="${topic.id}" type="button" ${unlocked ? "" : "disabled"}>
              Notu Kaydet
            </button>
          </div>
          <button class="primary-button" data-toggle-topic="${topic.id}" type="button" ${unlocked ? "" : "disabled"}>
            ${completed ? "Tamamlandı İşaretini Kaldır" : "Konuyu Tamamla"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderResourceFilters() {
  if (!elements.resourceFilter) {
    return;
  }

  const areas = [...new Set(IOSPATH_DATA.resources.map((resource) => resource.area))]
    .sort((first, second) => first.localeCompare(second, "tr"));
  const selected = state.resourceFilter === "all" || areas.includes(state.resourceFilter)
    ? state.resourceFilter
    : "all";

  state.resourceFilter = selected;
  elements.resourceFilter.innerHTML = `
    <option value="all">Tüm kaynaklar</option>
    ${areas.map((area) => `<option value="${area}">${area}</option>`).join("")}
  `;
  elements.resourceFilter.value = selected;
}

function renderResources() {
  if (!elements.resourceGrid) {
    return;
  }

  const search = state.resourceSearch.trim().toLocaleLowerCase("tr");
  const resources = IOSPATH_DATA.resources.filter((resource) => {
    const id = resourceId(resource);
    const filterMatches = state.resourceFilter === "all" || resource.area === state.resourceFilter;
    const favoriteMatches = !state.showFavoriteResources || state.progress.favoriteResources.includes(id);
    const searchMatches = !search || [resource.title, resource.area, resource.description]
      .join(" ")
      .toLocaleLowerCase("tr")
      .includes(search);

    return filterMatches && favoriteMatches && searchMatches;
  });

  if (elements.favoriteResourceToggle) {
    const count = state.progress.favoriteResources.length;
    elements.favoriteResourceToggle.textContent = state.showFavoriteResources
      ? `Tüm Kaynaklar (${count})`
      : `Favoriler (${count})`;
    elements.favoriteResourceToggle.classList.toggle("is-active", state.showFavoriteResources);
  }

  if (!resources.length) {
    elements.resourceGrid.innerHTML = "<p class=\"empty-state\">Bu filtreye uygun kaynak bulunamadı.</p>";
    return;
  }

  elements.resourceGrid.innerHTML = resources.map((resource) => `
    <article class="resource-card">
      <span class="tag">${resource.area}</span>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <div class="resource-actions">
        <button class="ghost-button favorite-resource-button ${state.progress.favoriteResources.includes(resourceId(resource)) ? "is-favorite" : ""}" data-resource-favorite="${escapeHtml(resourceId(resource))}" type="button">
          ${state.progress.favoriteResources.includes(resourceId(resource)) ? "Favoriden Çıkar" : "Favoriye Ekle"}
        </button>
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer">Kaynağı Aç</a>
      </div>
    </article>
  `).join("");
}

function renderInterviewQuestion() {
  if (!elements.questionLevel) {
    return;
  }

  const question = getCurrentQuestion();
  const id = questionId(question);
  const isKnown = state.progress.questionStats.knownIds.includes(id);
  const isReview = state.progress.questionStats.reviewIds.includes(id);

  elements.questionLevel.textContent = question.level;
  elements.questionCategory.textContent = question.category;
  elements.questionTitle.textContent = question.title;
  elements.questionAnswer.textContent = state.showAnswer ? question.answer : "Cevabı görmek için butona bas.";
  elements.toggleAnswerButton.textContent = state.showAnswer ? "Cevabı Gizle" : "Cevabı Göster";

  if (elements.knownQuestionButton) {
    elements.knownQuestionButton.classList.toggle("is-active", isKnown);
  }

  if (elements.reviewQuestionButton) {
    elements.reviewQuestionButton.classList.toggle("is-active", isReview);
  }
}

function getFilteredQuestions() {
  return IOSPATH_DATA.questions.filter((question) => {
    const categoryMatches = state.questionCategoryFilter === "all" || question.category === state.questionCategoryFilter;
    const levelMatches = state.questionLevelFilter === "all" || question.level === state.questionLevelFilter;
    return categoryMatches && levelMatches;
  });
}

function renderQuestionFilters() {
  if (!elements.questionCategoryFilter) {
    return;
  }

  const categories = [...new Set(IOSPATH_DATA.questions.map((question) => question.category))];
  elements.questionCategoryFilter.innerHTML = `
    <option value="all">Tüm kategoriler</option>
    ${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}
  `;
  elements.questionCategoryFilter.value = state.questionCategoryFilter;
  elements.questionLevelFilter.value = state.questionLevelFilter;
}

function renderQuestionBank() {
  if (!elements.questionList) {
    return;
  }

  const questions = getFilteredQuestions();
  const activeCategory = state.questionCategoryFilter === "all" ? "Tüm kategoriler" : state.questionCategoryFilter;
  const activeLevel = state.questionLevelFilter === "all" ? "Tüm seviyeler" : state.questionLevelFilter;

  if (elements.questionTotal) {
    elements.questionTotal.textContent = questions.length;
  }

  if (elements.activeFilterLabel) {
    elements.activeFilterLabel.textContent = `${activeCategory} / ${activeLevel}`;
  }

  if (!questions.length) {
    elements.questionList.innerHTML = "<p class=\"empty-state\">Bu filtreye uygun soru bulunamadı.</p>";
    return;
  }

  elements.questionList.innerHTML = questions.map((question, index) => `
    <article class="bank-question ${state.progress.questionStats.knownIds.includes(questionId(question)) ? "is-known" : ""} ${state.progress.questionStats.reviewIds.includes(questionId(question)) ? "is-review" : ""}">
      <div>
        <span class="tag">${question.category}</span>
        <span class="tag">${question.level}</span>
        ${state.progress.questionStats.knownIds.includes(questionId(question)) ? "<span class=\"tag done\">Bildim</span>" : ""}
        ${state.progress.questionStats.reviewIds.includes(questionId(question)) ? "<span class=\"tag locked\">Tekrar</span>" : ""}
      </div>
      <h3>${index + 1}. ${question.title}</h3>
      <p>${question.answer}</p>
    </article>
  `).join("");
}

function renderInterviewPerformance() {
  if (!elements.interviewPerformance && !elements.interviewScore) {
    return;
  }

  const knownCount = state.progress.questionStats.knownIds.length;
  const reviewCount = state.progress.questionStats.reviewIds.length;
  const total = IOSPATH_DATA.questions.length;
  const score = Math.round((knownCount / total) * 100);
  const reviewCategories = state.progress.questionStats.reviewIds.reduce((acc, id) => {
    const question = IOSPATH_DATA.questions.find((item) => questionId(item) === id);

    if (question) {
      acc[question.category] = (acc[question.category] || 0) + 1;
    }

    return acc;
  }, {});
  const weakestCategory = Object.entries(reviewCategories).sort((a, b) => b[1] - a[1])[0]?.[0] || "Yok";

  if (elements.interviewScore) {
    elements.interviewScore.textContent = `${score}%`;
  }

  if (elements.interviewPerformance) {
    elements.interviewPerformance.innerHTML = `
      <article>
        <span>Bildim</span>
        <strong>${knownCount}</strong>
        <p>Güvenli cevaplanan soru sayısı.</p>
      </article>
      <article>
        <span>Tekrar Çalış</span>
        <strong>${reviewCount}</strong>
        <p>Tekrar edilmesi gereken soru sayısı.</p>
      </article>
      <article>
        <span>Zayıf Kategori</span>
        <strong>${weakestCategory}</strong>
        <p>Tekrar listesinde en çok görünen başlık.</p>
      </article>
    `;
  }
}

function renderPortfolio() {
  if (!elements.portfolioList) {
    return;
  }

  const completedTopics = IOSPATH_DATA.topics.filter((topic) => isCompleted(topic.id));

  if (completedTopics.length === 0) {
    elements.portfolioList.innerHTML = "<li>Henüz tamamlanan konu yok. İlk konu tamamlandığında gelişim günlüğü oluşacak.</li>";
    return;
  }

  elements.portfolioList.innerHTML = completedTopics.map((topic) => {
    const projectLink = state.progress.githubLinks[topic.id];
    const linkMarkup = projectLink
      ? `<br><a href="${escapeHtml(projectLink)}" target="_blank" rel="noopener noreferrer">Proje kanıtını aç</a>`
      : "<br><span>Proje linki henüz eklenmedi</span>";

    return `<li><strong>${topic.title}</strong><br>Tamamlandı${linkMarkup}</li>`;
  }).join("");
}

function renderPortfolioReport() {
  if (!elements.portfolioReport) {
    return;
  }

  elements.portfolioReport.textContent = getPortfolioReportText();
}

function renderApp() {
  renderDashboard();
  renderBadges();
  renderSkillTree();
  renderTopics();
  renderResourceFilters();
  renderResources();
  renderInterviewQuestion();
  renderQuestionFilters();
  renderQuestionBank();
  renderInterviewPerformance();
  renderPortfolio();
  renderPortfolioReport();
}

function bindEvents() {
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleTheme);
  }

  if (elements.topicList) {
    elements.topicList.addEventListener("click", (event) => {
      const toggleButton = event.target.closest("[data-toggle-topic]");

      if (toggleButton) {
        toggleTopic(toggleButton.dataset.toggleTopic);
      }

      const saveGithubButton = event.target.closest("[data-save-github]");

      if (saveGithubButton) {
        const topicId = saveGithubButton.dataset.saveGithub;
        const input = elements.topicList.querySelector(`[data-github-input="${topicId}"]`);
        saveProjectLink(topicId, input ? input.value : "");
      }

      const saveNoteButton = event.target.closest("[data-save-note]");

      if (saveNoteButton) {
        const topicId = saveNoteButton.dataset.saveNote;
        const input = elements.topicList.querySelector(`[data-topic-note="${topicId}"]`);
        saveTopicNote(topicId, input ? input.value : "");
      }
    });

    elements.topicList.addEventListener("keydown", (event) => {
      const input = event.target.closest("[data-github-input]");

      if (input && event.key === "Enter") {
        event.preventDefault();
        saveProjectLink(input.dataset.githubInput, input.value);
      }
    });
  }

  if (elements.roadmapSearch) {
    elements.roadmapSearch.addEventListener("input", (event) => {
      state.roadmapSearch = event.target.value;
      renderTopics();
    });
  }

  if (elements.roadmapStatusFilter) {
    elements.roadmapStatusFilter.addEventListener("change", (event) => {
      state.roadmapStatusFilter = event.target.value;
      renderTopics();
    });
  }

  if (elements.roadmapLevelFilter) {
    elements.roadmapLevelFilter.addEventListener("change", (event) => {
      state.roadmapLevelFilter = event.target.value;
      renderTopics();
    });
  }

  if (elements.resourceFilter) {
    elements.resourceFilter.addEventListener("change", (event) => {
      state.resourceFilter = event.target.value;
      renderResources();
    });
  }

  if (elements.resourceSearch) {
    elements.resourceSearch.addEventListener("input", (event) => {
      state.resourceSearch = event.target.value;
      renderResources();
    });
  }

  if (elements.favoriteResourceToggle) {
    elements.favoriteResourceToggle.addEventListener("click", () => {
      state.showFavoriteResources = !state.showFavoriteResources;
      renderResources();
    });
  }

  if (elements.resourceGrid) {
    elements.resourceGrid.addEventListener("click", (event) => {
      const favoriteButton = event.target.closest("[data-resource-favorite]");

      if (favoriteButton) {
        toggleResourceFavorite(favoriteButton.dataset.resourceFavorite);
      }
    });
  }

  if (elements.nextQuestionButton) {
    elements.nextQuestionButton.addEventListener("click", () => {
      const questions = getFilteredQuestions();
      state.currentQuestionIndex = Math.floor(Math.random() * Math.max(questions.length, 1));
      state.showAnswer = true;
      renderInterviewQuestion();
    });
  }

  if (elements.toggleAnswerButton) {
    elements.toggleAnswerButton.addEventListener("click", () => {
      state.showAnswer = !state.showAnswer;
      renderInterviewQuestion();
    });
  }

  if (elements.knownQuestionButton) {
    elements.knownQuestionButton.addEventListener("click", () => markCurrentQuestion("known"));
  }

  if (elements.reviewQuestionButton) {
    elements.reviewQuestionButton.addEventListener("click", () => markCurrentQuestion("review"));
  }

  if (elements.questionCategoryFilter) {
    elements.questionCategoryFilter.addEventListener("change", (event) => {
      state.questionCategoryFilter = event.target.value;
      state.currentQuestionIndex = 0;
      renderInterviewQuestion();
      renderQuestionBank();
    });
  }

  if (elements.questionLevelFilter) {
    elements.questionLevelFilter.addEventListener("change", (event) => {
      state.questionLevelFilter = event.target.value;
      state.currentQuestionIndex = 0;
      renderInterviewQuestion();
      renderQuestionBank();
    });
  }

  if (elements.copyPortfolioButton) {
    elements.copyPortfolioButton.addEventListener("click", async () => {
      const report = getPortfolioReportText();

      try {
        await navigator.clipboard.writeText(report);
        elements.copyPortfolioButton.textContent = "Kopyalandı";
        setTimeout(() => {
          elements.copyPortfolioButton.textContent = "Özeti Kopyala";
        }, 1400);
      } catch (error) {
        window.alert(report);
      }
    });
  }

  if (elements.downloadPortfolioButton) {
    elements.downloadPortfolioButton.addEventListener("click", () => {
      const blob = new Blob([getPortfolioReportText()], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "iospath-portfolyo-ozeti.txt";
      link.click();
      URL.revokeObjectURL(url);
    });
  }
}

applyTheme(getPreferredTheme());
bindEvents();
renderApp();

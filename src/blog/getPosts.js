const modules = import.meta.glob("./posts/*.js", { eager: true });

export function getAllPosts() {
  return Object.values(modules)
    .map((m) => m.default)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}

export function readingTime(content) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export function formatDate(dateStr, lang) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr + "T12:00:00"));
}

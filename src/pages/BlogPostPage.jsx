import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, readingTime, formatDate } from "../blog/getPosts";

const PRIMARY = "#2d418e";
const ACCENT = "#32b9cc";

const mdComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-fraunces font-bold mt-10 mb-4 leading-tight" style={{ color: PRIMARY }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-fraunces font-bold mt-10 mb-3" style={{ color: PRIMARY }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-fraunces font-semibold mt-7 mb-2" style={{ color: PRIMARY }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-5 text-base">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-5 space-y-1.5 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-5 space-y-1.5 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote
      className="border-l-4 pl-5 py-1 my-6 text-gray-600 italic rounded-r-xl bg-gray-50"
      style={{ borderColor: ACCENT }}
    >
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  a: ({ href, children }) => (
    <a href={href} className="underline font-medium" style={{ color: ACCENT }}>
      {children}
    </a>
  ),
  hr: () => <hr className="my-10 border-gray-200" />,
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6 rounded-2xl border border-gray-200">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="text-white text-left" style={{ background: PRIMARY }}>
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="px-5 py-3 font-semibold">{children}</th>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
      {children}
    </tr>
  ),
  td: ({ children }) => (
    <td className="px-5 py-3 text-gray-700">{children}</td>
  ),
  code: ({ children }) => (
    <code
      className="font-mono text-sm px-1.5 py-0.5 rounded"
      style={{ background: ACCENT + "18", color: PRIMARY }}
    >
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-5 rounded-2xl overflow-x-auto mb-5 text-sm font-mono">
      {children}
    </pre>
  ),
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const localized = post[lang];
  const mins = readingTime(localized.content);
  const date = formatDate(post.date, lang);
  const postUrl = `https://www.ondoctor365.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localized.title,
    description: localized.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.ondoctor365.com",
    },
    publisher: {
      "@type": "Organization",
      name: "OnDoctor365",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ondoctor365.com/favicon.png",
      },
    },
    image: post.image
      ? `https://www.ondoctor365.com${post.image}`
      : "https://www.ondoctor365.com/Mockups.png",
    url: postUrl,
  };

  return (
    <div className="bg-white min-h-screen">
      <Helmet htmlAttributes={{ lang }}>
        <title>{localized.title} | OnDoctor365</title>
        <meta name="description" content={localized.description} />
        <link rel="canonical" href={postUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={localized.title} />
        <meta property="og:description" content={localized.description} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={post.image ? `https://www.ondoctor365.com${post.image}` : "https://www.ondoctor365.com/Mockups.png"} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <link rel="alternate" hrefLang="es" href={postUrl} />
        <link rel="alternate" hrefLang="en" href={postUrl} />
        <link rel="alternate" hrefLang="x-default" href={postUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Cover */}
      <div
        className="w-full h-64 md:h-96"
        style={
          post.image
            ? { background: `url(${post.image}) center/cover` }
            : {
                background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
              }
        }
      />

      {/* Article */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 hover:opacity-70 transition-opacity"
          style={{ color: ACCENT }}
        >
          <ArrowLeft size={15} />
          {t("blog.back")}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <h1
            className="font-fraunces font-bold text-3xl md:text-5xl leading-tight mb-5"
            style={{ color: PRIMARY }}
          >
            {localized.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>{t("blog.written_by")} <strong className="text-gray-700">{post.author}</strong></span>
            <span className="text-gray-300">·</span>
            <time dateTime={post.date}>{date}</time>
            <span className="text-gray-300">·</span>
            <span>{mins} {t("blog.min_read")}</span>
          </div>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed border-l-4 pl-4" style={{ borderColor: ACCENT }}>
            {localized.description}
          </p>
        </header>

        <hr className="border-gray-100 mb-10" />

        {/* Prose */}
        <article>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {localized.content}
          </ReactMarkdown>
        </article>

        {/* Footer nav */}
        <div className="mt-14 pt-8 border-t border-gray-100">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: ACCENT }}
          >
            <ArrowLeft size={15} />
            {t("blog.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}

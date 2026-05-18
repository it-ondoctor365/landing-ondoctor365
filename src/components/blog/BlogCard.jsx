import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { readingTime, formatDate } from "../../blog/getPosts";

const PRIMARY = "#2d418e";
const ACCENT = "#32b9cc";

export default function BlogCard({ post }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const localized = post[lang];
  const mins = readingTime(localized.content);
  const date = formatDate(post.date, lang);

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={localized.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${PRIMARY} 0%, ${ACCENT} 100%)`,
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              opacity="0.35"
            >
              <circle cx="28" cy="28" r="28" fill="white" />
              <path
                d="M28 16v24M16 28h24"
                stroke={PRIMARY}
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <time dateTime={post.date}>{date}</time>
          <span>·</span>
          <span>
            {mins} {t("blog.min_read")}
          </span>
        </div>

        <h2
          className="font-fraunces font-bold text-lg leading-snug line-clamp-2 mb-2 group-hover:opacity-75 transition-opacity"
          style={{ color: PRIMARY }}
        >
          {localized.title}
        </h2>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
          {localized.description}
        </p>

        <span
          className="flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: ACCENT }}
        >
          {t("blog.read_more")}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform"
          />
        </span>
      </div>
    </Link>
  );
}

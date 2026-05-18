import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getAllPosts } from "../blog/getPosts";
import BlogCard from "../components/blog/BlogCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection";

const ACCENT = "#32b9cc";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Blog() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith("es") ? "es" : "en";
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: t("pageTitles.blog.title"),
    description: t("pageTitles.blog.description"),
    url: "https://www.ondoctor365.com/blog",
    publisher: {
      "@type": "Organization",
      name: "OnDoctor365",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ondoctor365.com/favicon.png",
      },
    },
  };

  return (
    <div>
      <Helmet htmlAttributes={{ lang }}>
        <title>{t("pageTitles.blog.title")}</title>
        <meta name="description" content={t("pageTitles.blog.description")} />
        <link rel="canonical" href="https://www.ondoctor365.com/blog" />
        <meta property="og:title" content={t("pageTitles.blog.title")} />
        <meta property="og:description" content={t("pageTitles.blog.description")} />
        <meta property="og:url" content="https://www.ondoctor365.com/blog" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[340px] overflow-hidden text-white flex items-center"
        style={{ background: "#2d418e" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px]"
            style={{ background: ACCENT, opacity: 0.12 }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ background: "#1a2860", opacity: 0.8 }}
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff0a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border mb-6"
              style={{
                color: ACCENT,
                borderColor: ACCENT + "50",
                background: ACCENT + "18",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
              />
              {t("blog.hero_badge")}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-fraunces font-bold leading-tight mb-4"
          >
            {t("blog.hero_titulo")}{" "}
            <span style={{ color: ACCENT }}>{t("blog.hero_titulo_accent")}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-white/70 text-sm max-w-lg leading-relaxed"
          >
            {t("blog.hero_subtitulo")}
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-gray-400 py-24">{t("blog.empty")}</p>
          </AnimatedSection>
        ) : (
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>
    </div>
  );
}

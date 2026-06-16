'use client';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedAt: string;
}

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="glass-card overflow-hidden rounded-3xl shadow-glow transition hover:-translate-y-1 hover:border-itera-accent hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]">
      <div className="relative h-64 overflow-hidden bg-zinc-950">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-itera-red/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {article.category}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-itera-textMuted">
          <span>{article.publishedAt}</span>
          <span className="text-itera-gold">Baca Selengkapnya</span>
        </div>
        <h3 className="text-2xl font-bold text-white">{article.title}</h3>
        <p className="text-itera-textMuted">{article.excerpt}</p>
      </div>
    </article>
  );
}

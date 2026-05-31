import type { ReactNode } from 'react';
import type { ContentCardMeta } from '../../types/portfolio';

export interface ContentCardProps {
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  meta: ContentCardMeta[];
  href?: string | null;
  hrefLabel?: string;
  badge?: ReactNode;
  className?: string;
}

export default function ContentCard({
  index,
  eyebrow,
  title,
  description,
  meta,
  href,
  hrefLabel = 'View campaign',
  badge,
  className = '',
}: ContentCardProps) {
  return (
    <article
      className={`group border border-gray-900 bg-black/40 p-6 sm:p-8 transition-colors duration-500 hover:border-gray-800 ${className}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase">
          {String(index + 1).padStart(2, '0')} · {eyebrow}
        </span>
        {badge}
      </div>

      <h3 className="text-2xl sm:text-3xl font-light tracking-tight group-hover:text-gray-300 transition-colors duration-500">
        {title}
      </h3>

      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {meta.map((item) => (
          <div key={item.label}>
            <dt className="text-[10px] tracking-[0.15em] text-gray-700 uppercase mb-1">
              {item.label}
            </dt>
            <dd className="text-gray-400">{item.value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 text-gray-500 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
        {description}
      </p>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 text-[10px] tracking-[0.2em] uppercase text-gray-400 border-b border-gray-800 pb-1 hover:text-white hover:border-gray-500 transition-colors duration-300"
        >
          {hrefLabel}
        </a>
      ) : null}
    </article>
  );
}

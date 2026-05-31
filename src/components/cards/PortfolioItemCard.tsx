import type { PortfolioItemStatus } from '../../types/portfolio';
import { formatStatusLabel } from '../../utils/format';

const statusStyles: Record<PortfolioItemStatus, string> = {
  draft: 'text-gray-600 border-gray-900',
  published: 'text-emerald-500/90 border-emerald-900/50',
  archived: 'text-gray-500 border-gray-800',
};

export interface PortfolioItemCardProps {
  index: number;
  pillar: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  status: PortfolioItemStatus;
}

export default function PortfolioItemCard({
  index,
  pillar,
  title,
  category,
  description,
  imageUrl,
  status,
}: PortfolioItemCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden border border-gray-900 mb-6 relative">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0"
        />
        <span
          className={`absolute top-4 right-4 text-[10px] tracking-[0.15em] uppercase px-3 py-1 border bg-black/60 backdrop-blur-sm ${statusStyles[status]}`}
        >
          {formatStatusLabel(status)}
        </span>
      </div>

      <span className="text-[10px] tracking-[0.2em] text-gray-700 uppercase block mb-3">
        {String(index + 1).padStart(2, '0')} · {pillar} · {category}
      </span>

      <h3 className="text-2xl font-light tracking-tight group-hover:text-gray-300 transition-colors duration-500">
        {title}
      </h3>

      <p className="text-gray-500 mt-3 leading-relaxed text-sm line-clamp-2 group-hover:text-gray-400 transition-colors duration-500">
        {description}
      </p>
    </article>
  );
}

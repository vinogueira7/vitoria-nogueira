import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle2, SlidersHorizontal } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Testimonials() {
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  const filteredReviews = ratingFilter
    ? REVIEWS.filter((r) => r.rating === ratingFilter)
    : REVIEWS;

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title portion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9586]/10 text-[#A06C5E] text-xs font-mono uppercase tracking-widest font-bold">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Opinião de Quem Compara</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1D1B] tracking-tight font-extrabold text-left">
              Resultados Reais Contados por Clientes Reais
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] leading-relaxed">
              Descubra por que dezenas de blogueiras e cabeleireiros profissionais migraram para GlowPro. Resultados obtidos em diferentes porosidades e texturas de fios.
            </p>
          </div>

          {/* Sorters/Filters */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#7C776E] flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#CA9586]" /> FILTRAR:
            </span>
            <div className="flex gap-1.5 text-xs font-semibold">
              <button
                onClick={() => setRatingFilter(null)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  ratingFilter === null
                    ? 'bg-[#1F1D1B] text-white'
                    : 'bg-[#FAF8F5] text-[#5C5751] hover:bg-[#EBE6DD]'
                }`}
              >
                Todas ({REVIEWS.length})
              </button>
              <button
                onClick={() => setRatingFilter(5)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  ratingFilter === 5
                    ? 'bg-[#1F1D1B] text-white'
                    : 'bg-[#FAF8F5] text-[#5C5751] hover:bg-[#EBE6DD]'
                }`}
              >
                5 ★ ({REVIEWS.filter((r) => r.rating === 5).length})
              </button>
              <button
                onClick={() => setRatingFilter(4)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  ratingFilter === 4
                    ? 'bg-[#1F1D1B] text-white'
                    : 'bg-[#FAF8F5] text-[#5C5751] hover:bg-[#EBE6DD]'
                }`}
              >
                4 ★ ({REVIEWS.filter((r) => r.rating === 4).length})
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#EDE9E2] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header reviewer information */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EBE6DD]">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-[#1F1D1B] text-sm flex items-center gap-1">
                      {rev.author}
                      {rev.verified && <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-current text-white flex-shrink-0" />}
                    </h4>
                    <span className="block text-[11px] font-mono text-zinc-400">Avaliação em {rev.date}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-[#D6A28C]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current ${
                        i < rev.rating ? 'text-amber-500' : 'text-neutral-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Content review text */}
                <p className="text-sm text-[#4A4640] leading-relaxed italic font-sans">
                  "{rev.content}"
                </p>
              </div>

              {/* Tag metadata indicating user hair structure & target appliance purchased */}
              <div className="pt-4 border-t border-[#EBE6DD] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-[#CA9586]/10 text-[#A06C5E] font-bold">
                  {rev.hairType}
                </span>
                <span className="text-[#7C776E] text-[10px] break-all text-right uppercase">
                  Comprou: <strong className="text-[#1F1D1B]">{rev.productName}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

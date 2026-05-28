import React from 'react';
import { Star, Shield, HelpCircle, ShoppingCart, Percent, Heart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
  onSelectCompare: (product: Product) => void;
  isCompared: boolean;
}

export default function ProductCard({ product, onAddToCart, onSelectCompare, isCompared }: ProductCardProps) {
  const pixPrice = (product.price * 0.9).toFixed(0);
  const installmentPrice = (product.price / 12).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl border border-[#EDE9E2] overflow-hidden hover:shadow-xl transition-all flex flex-col group relative"
    >
      {/* Upper Category Badging & Heart wishlist mock */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
        {product.badge && (
          <span className="px-3 py-1 rounded-full bg-[#1F1D1B] text-white text-[10px] font-mono tracking-wider uppercase font-bold shadow-sm">
            {product.badge}
          </span>
        )}
        <span className="px-2.5 py-0.5 rounded-full bg-[#CA9586]/10 text-[#A06C5E] text-[9px] font-mono tracking-widest uppercase font-bold">
          {product.brand}
        </span>
      </div>

      <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-[#EBE6DD] text-[#7C776E] hover:text-[#CA9586] hover:bg-white transition-all cursor-pointer">
        <Heart className="w-4 h-4" />
      </button>

      {/* Main product representation */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF8F5] relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Primary specs metadata & rating */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center space-x-1.5 mb-1.5">
            <div className="flex text-[#D6A28C]">
              {Array.from({ length: 5 }).map((_, index) => {
                const isFull = index < Math.floor(product.rating);
                return (
                  <Star
                    key={index}
                    className={`w-3.5 h-3.5 fill-current ${isFull ? 'text-amber-500' : 'text-neutral-200'}`}
                  />
                );
              })}
            </div>
            <span className="text-xs text-[#7C776E] font-medium font-mono">
              {product.rating} ({product.reviewsCount} avaliações)
            </span>
          </div>

          <h3 className="text-[17px] font-serif text-[#1F1D1B] font-bold tracking-tight line-clamp-2 leading-snug group-hover:text-[#CA9586] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#6B665E] leading-relaxed mt-2 line-clamp-2 font-sans">
            {product.description}
          </p>

          {/* Key bullets */}
          <ul className="mt-4 space-y-1.5">
            {product.highlights.slice(0, 3).map((hl, i) => (
              <li key={i} className="text-[11px] text-[#55504A] flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#CA9586]" />
                <span className="font-sans font-medium">{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing tag modules with extreme premium aesthetics */}
        <div className="pt-4 border-t border-[#EDE9E2]">
          <div className="flex items-baseline space-x-2">
            {product.originalPrice && (
              <span className="text-xs text-zinc-400 line-through font-mono">
                R$ {product.originalPrice.toLocaleString('pt-BR')},00
              </span>
            )}
            <span className="text-2xl font-mono font-bold text-[#1F1D1B] tracking-tight">
              R$ {product.price.toLocaleString('pt-BR')},00
            </span>
          </div>

          <div className="space-y-1 mt-1">
            <span className="block text-xs text-[#524E48] font-sans">
              ou <strong className="text-[#1F1D1B] font-mono">12x de R$ {installmentPrice}</strong> sem juros no cartão
            </span>
            <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              <Percent className="w-3 h-3" />
              <span>R$ {Number(pixPrice).toLocaleString('pt-BR')},00 à vista no PIX (10% OFF!)</span>
            </div>
          </div>
        </div>

        {/* Express interactive buying panel */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          {/* Compare trigger button */}
          <button
            type="button"
            onClick={() => onSelectCompare(product)}
            className={`px-3 py-2.5 rounded-full border text-xs font-mono tracking-wider font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-1 ${
              isCompared
                ? 'bg-[#EAD0C3]/30 border-[#CA9586] text-[#A06C5E] font-extrabold'
                : 'border-[#D9D3C8] text-[#524E48] hover:border-[#CA9586] hover:text-[#CA9586] bg-white'
            }`}
          >
            {isCompared ? 'Comparando' : '+ Comparar'}
          </button>

          {/* Add to cart express button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="px-3 py-2.5 rounded-full bg-[#1F1D1B] text-white text-xs font-sans tracking-wide font-bold hover:bg-[#CA9586] transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Comprar</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

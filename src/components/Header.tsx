import React from 'react';
import { ShoppingBag, Sparkles, Sliders, MessageSquare, HelpCircle, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onScrollTo: (elementId: string) => void;
}

export default function Header({ cartCount, onOpenCart, onScrollTo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F7]/95 backdrop-blur-md border-b border-[#EBE6DD]">
      {/* Dynamic Promotion Ticker */}
      <div className="w-full bg-[#1F1D1B] py-2 text-center text-[11px] font-mono tracking-widest text-[#EAD0C3] flex items-center justify-center space-x-2 px-4 uppercase">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#D6A28C]" />
        <span>Glow Weeks: Cupom <strong className="text-white hover:underline">GLOW10</strong> ativo • Frete Grátis para todo o Brasil • Envio em 24h</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onScrollTo('hero')} 
          className="cursor-pointer flex flex-col items-start select-none group"
        >
          <span className="text-2xl font-serif text-[#1F1D1B] tracking-tight font-extrabold flex items-center gap-1.5">
            GLOW<span className="text-[#CA9586] font-light italic">PRO</span>
          </span>
          <span className="text-[9px] font-mono tracking-widest text-[#7C776E] uppercase group-hover:text-[#CA9586] transition-colors">
            TECNOLOGIA CAPILAR DE LUXO
          </span>
        </div>

        {/* Elegant Navigation Anchors */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#4E4A45]">
          <button 
            onClick={() => onScrollTo('products')} 
            className="hover:text-[#CA9586] transition-colors flex items-center gap-1.5 py-2 cursor-pointer relative group"
          >
            <Sliders className="w-4 h-4 text-[#CA9586]/70" />
            Vitrines Premium
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CA9586] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => onScrollTo('quiz')} 
            className="hover:text-[#CA9586] transition-colors flex items-center gap-1.5 py-2 cursor-pointer relative group"
          >
            <GraduationCap className="w-4 h-4 text-[#CA9586]/70" />
            Quiz Capilar
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CA9586] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => onScrollTo('compare')} 
            className="hover:text-[#CA9586] transition-colors flex items-center gap-1.5 py-2 cursor-pointer relative group"
          >
            <Sliders className="w-4 h-4 text-[#CA9586]/70" />
            Comparador Técnico
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CA9586] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => onScrollTo('testimonials')} 
            className="hover:text-[#CA9586] transition-colors flex items-center gap-1.5 py-2 cursor-pointer relative group"
          >
            <MessageSquare className="w-4 h-4 text-[#CA9586]/70" />
            Depoimentos
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CA9586] group-hover:w-full transition-all duration-300"></span>
          </button>
          <button 
            onClick={() => onScrollTo('faq')} 
            className="hover:text-[#CA9586] transition-colors flex items-center gap-1.5 py-2 cursor-pointer relative group"
          >
            <HelpCircle className="w-4 h-4 text-[#CA9586]/70" />
            Dúvidas
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CA9586] group-hover:w-full transition-all duration-300"></span>
          </button>
        </nav>

        {/* Brand Shopping Tray Action */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#1F1D1B] text-white hover:bg-[#CA9586] transition-all flex items-center gap-2 font-mono text-xs font-semibold shadow-lg shadow-[#1F1D1B]/10 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">SACOLA</span>
            <span className="bg-white text-[#1F1D1B] w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px]">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

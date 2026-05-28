import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartPulse, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#F3ECE5] to-[#FBF9F7] py-16 md:py-24 overflow-hidden border-b border-[#EBE6DD]">
      {/* Absolute Decorative Blobs to replicate high-end metallic lighting */}
      <div className="absolute right-[-10%] top-0 w-[400px] h-[400px] rounded-full bg-[#CA9586]/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-5 w-[300px] h-[300px] rounded-full bg-[#EAD0C3]/20 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copys (Left Section) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CA9586]/10 border border-[#CA9586]/20 text-[#9E6E60] font-mono text-[11px] font-semibold uppercase tracking-wider select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A evolução da alta tecnologia capilar</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F1D1B] leading-[1.1] tracking-tight font-extrabold">
              Seu cabelo merece a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E5E50] via-[#CA9586] to-[#E3B2A5]">
                melhor engenharia
              </span> do mundo.
            </h1>

            <p className="text-base sm:text-lg text-[#5C5751] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Chega de danificar a sua fibra capilar com temperaturas instáveis e aparelhos analógicos. Descubra as chapinhas preditivas, secadores ultra-iônicos e babyliss automáticos preferidos pelos melhores salões do país.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onScrollTo('quiz')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1F1D1B] text-white hover:bg-[#CA9586] transition-all font-semibold font-sans text-sm flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-[#1F1D1B]/10 font-medium"
              >
                <span>Descobrir Aparelho Ideal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#F0E7DE' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onScrollTo('products')}
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D1C6BA] text-[#1F1D1B] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer bg-white/40"
              >
                <span>Conhecer Marcas</span>
              </motion.button>
            </div>

            {/* Credibility mini pillars */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-[#DED6CC] max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <span className="block text-xl font-serif font-bold text-[#1F1D1B]">100%</span>
                <span className="text-[11px] font-mono tracking-widest text-[#7C776E] uppercase">Originais Oficiais</span>
              </div>
              <div className="text-center lg:text-left border-x border-[#EDE9E3] px-4">
                <span className="block text-xl font-serif font-bold text-[#1F1D1B]">Até 3 Anos</span>
                <span className="text-[11px] font-mono tracking-widest text-[#7C776E] uppercase">Garantia Nacional</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-xl font-serif font-bold text-[#1F1D1B]">12x s/ juros</span>
                <span className="text-[11px] font-mono tracking-widest text-[#7C776E] uppercase">Cartão ou PIX (-10%)</span>
              </div>
            </div>
          </div>

          {/* Featured Visual Spotlight (Right Section) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Box mimic a luxury retail glass box */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              
              {/* Product background cover with warm luxury look */}
              <img 
                src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600" 
                alt="Modelagem de cabelo luxuosa" 
                className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Float specs cards representing intelligent mechanics */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#EBE6DD] max-w-[170px] space-y-1.5 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#CA9586]/10 text-[#CA9586]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1D1B] leading-tight">Termo-Proteção</h4>
                  <p className="text-[9px] text-[#7C776E] leading-snug">Sensores preditivos calibram o calor constante real.</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-[#1F1D1B]/95 text-white backdrop-blur-md rounded-2xl p-3.5 shadow-2xl max-w-[200px] space-y-1">
                <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[8px] font-bold tracking-wider uppercase mb-1">
                  Recomendado
                </span>
                <p className="text-xs font-serif italic text-[#FFE8DF]">"O vapor da SteamPod mudou meu cabelo loiro completamente"</p>
                <span className="block text-[9px] text-zinc-400 font-mono">— Gisele V., Embaixadora GlowPro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

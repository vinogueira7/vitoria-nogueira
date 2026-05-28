import React from 'react';
import { Sparkles, Landmark, CreditCard, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onScrollTo: (elementId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-[#1F1D1B] text-zinc-400 py-16 border-t border-[#302B27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        
        {/* Col 1 Brand representation */}
        <div className="space-y-4">
          <span className="text-xl font-serif text-white tracking-tight font-extrabold flex items-center gap-1.5 cursor-pointer" onClick={() => onScrollTo('hero')}>
            GLOW<span className="text-[#CA9586] font-light italic">PRO</span>
          </span>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
            A boutique autorizada de eletro-tecnologia capilar de alta performance no Brasil. Unindo engenharia preditiva alemã, inovação britânica e confiabilidade nacional.
          </p>
          <div className="flex gap-2 pt-2 text-white">
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] font-mono uppercase tracking-wider font-bold">
              Inmetro Certified Approved
            </span>
          </div>
        </div>

        {/* Col 2 Quick anchors */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">EXPLORAR NAVEGAÇÃO</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onScrollTo('products')} className="hover:text-white transition-colors cursor-pointer">
                Nossos Aparelhos
              </button>
            </li>
            <li>
              <button onClick={() => onScrollTo('quiz')} className="hover:text-white transition-colors cursor-pointer">
                Quiz Diagnose Capilar
              </button>
            </li>
            <li>
              <button onClick={() => onScrollTo('compare')} className="hover:text-white transition-colors cursor-pointer">
                Comparador Síntese de Fichas
              </button>
            </li>
            <li>
              <button onClick={() => onScrollTo('testimonials')} className="hover:text-white transition-colors cursor-pointer">
                Avaliações de Clientes
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3 Famous partnering brands */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">MARCAS AUTORIZADAS</h4>
          <ul className="space-y-2 text-xs font-serif italic text-zinc-300">
            <li>Dyson™ Professional (UK)</li>
            <li>ghd™ Good Hair Day (UK)</li>
            <li>L\'Oréal Professionnel® (FR)</li>
            <li>Babyliss PRO™ (US)</li>
            <li>Parlux® Professionals (IT)</li>
            <li>Taiff® & Lizze® (BR)</li>
          </ul>
        </div>

        {/* Col 4 Safety seals / contact */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">TRANSPARÊNCIA E COMPRA</h4>
          <p className="text-xs leading-relaxed max-w-xs font-sans">
            Para dúvidas ou consultorias customizadas, fale conosco enviando uma mensagem no email <u className="text-white">vnogueira838@gmail.com</u>.
          </p>
          <div className="pt-2 flex items-center gap-2 text-white">
            <Landmark className="w-4 h-4 text-emerald-500" />
            <CreditCard className="w-4 h-4 text-[#CA9586]" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Criptografia SSL ativa</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-800 text-center text-[10px] text-zinc-500 space-y-2 text-left md:text-center font-sans">
        <p>© 2026 GlowPro Brasil Limitada. CNPJ sob nº 12.345.678/0001-99. Endereço: Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01311-100.</p>
        <p>Valores, cupons e parcelamentos exclusivos para compras no portal online. As especificações e marcas comerciais citadas pertencem aos seus respectivos titulares de patentes e distribuição.</p>
      </div>
    </footer>
  );
}

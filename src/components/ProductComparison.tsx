import React, { useState } from 'react';
import { Sliders, X, Check, HelpCircle, ArrowRightLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductComparisonProps {
  selectedProducts: Product[];
  onRemoveProduct: (productId: string) => void;
  onAddProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductComparison({
  selectedProducts,
  onRemoveProduct,
  onAddProduct,
  onAddToCart,
}: ProductComparisonProps) {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // Filter products that are not yet selected
  const getAvailableProducts = () => {
    const selectedIds = selectedProducts.map((p) => p.id);
    return PRODUCTS.filter((p) => !selectedIds.includes(p.id));
  };

  const attributes = [
    { label: 'Marca', getValue: (p: Product) => p.brand },
    { label: 'Preço Médio (PIX)', getValue: (p: Product) => `R$ ${(p.price * 0.9).toFixed(0)}` },
    { label: 'Temperatura Máxima', getValue: (p: Product) => p.specs.tempMax },
    { label: 'Peso Corporal', getValue: (p: Product) => p.specs.weight },
    { label: 'Tecnologia Proprietária', getValue: (p: Product) => p.specs.technology },
    { label: 'Ideal Para', getValue: (p: Product) => p.specs.idealFor },
    { label: 'Comprimento Cabo', getValue: (p: Product) => p.specs.cable },
    { label: 'Voltagem Técnica', getValue: (p: Product) => p.specs.voltage },
  ];

  return (
    <section id="compare" className="py-20 bg-[#FBF9F7] border-b border-[#EBE6DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title module */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9586]/10 text-[#A06C5E] text-xs font-mono uppercase tracking-widest font-bold">
            <Sliders className="w-3.5 h-3.5" />
            <span>Engenharia Comparada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1D1B] tracking-tight font-extrabold">
            Comparador de Especificações Técnicas
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] leading-relaxed">
            Selecione até dois aparelhos abaixo para colocar suas fichas técnicas lado a lado. Avalie peso, tecnologias e temperaturas para decidir com total autonomia científica.
          </p>
        </div>

        {/* Dynamic Matrix Layout */}
        <div className="bg-white rounded-3xl border border-[#EDE9E2] overflow-hidden shadow-sm max-w-5xl mx-auto">
          
          {/* Header Row: Selecting / Viewing Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#EBE6DD] bg-[#FAF8F5]/80 backdrop-blur-sm p-6 items-center gap-6">
            <div className="text-center md:text-left space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#A06C5E] flex items-center gap-1">
                <ArrowRightLeft className="w-4 h-4 text-[#CA9586]" /> DUELAR APARELHOS
              </span>
              <p className="text-xs text-[#7C776E]">Análise aprofundada de rendimento.</p>
            </div>

            {/* Column 1 slot */}
            <div className="relative">
              {selectedProducts[0] ? (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EBE6DD]">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedProducts[0].image}
                      alt={selectedProducts[0].name}
                      className="w-10 h-10 rounded-lg object-cover border border-[#EBE6DD]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <span className="block text-[10px] font-mono text-[#A06C5E] font-bold uppercase">{selectedProducts[0].brand}</span>
                      <h4 className="text-xs font-bold text-[#1F1D1B] truncate max-w-[150px]">{selectedProducts[0].name}</h4>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveProduct(selectedProducts[0].id)}
                    className="p-1.5 hover:text-[#CA9586] text-zinc-400 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === 1 ? null : 1)}
                    className="w-full text-left p-3 rounded-2xl border-2 border-dashed border-[#D9D3C8] text-xs font-mono font-semibold text-[#8C8479] hover:border-[#CA9586] hover:text-[#CA9586] transition-all bg-white cursor-pointer"
                  >
                    + Escolher 1º Produto...
                  </button>
                  {dropdownOpen === 1 && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-y-auto bg-white border border-[#EBE6DD] rounded-xl shadow-xl p-1.5 space-y-1 animate-fadeIn">
                      {getAvailableProducts().map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            onAddProduct(p);
                            setDropdownOpen(null);
                          }}
                          className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-[#FAF8F5] transition-colors flex items-center justify-between"
                        >
                          <span>{p.name} <u className="no-underline text-[#A06C5E]">({p.brand})</u></span>
                          <span className="font-mono text-[10px]">R$ {p.price}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Column 2 slot */}
            <div className="relative">
              {selectedProducts[1] ? (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#EBE6DD]">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedProducts[1].image}
                      alt={selectedProducts[1].name}
                      className="w-10 h-10 rounded-lg object-cover border border-[#EBE6DD]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="text-left">
                      <span className="block text-[10px] font-mono text-[#A06C5E] font-bold uppercase">{selectedProducts[1].brand}</span>
                      <h4 className="text-xs font-bold text-[#1F1D1B] truncate max-w-[150px]">{selectedProducts[1].name}</h4>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveProduct(selectedProducts[1].id)}
                    className="p-1.5 hover:text-[#CA9586] text-zinc-400 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === 2 ? null : 2)}
                    className="w-full text-left p-3 rounded-2xl border-2 border-dashed border-[#D9D3C8] text-xs font-mono font-semibold text-[#8C8479] hover:border-[#CA9586] hover:text-[#CA9586] transition-all bg-white cursor-pointer"
                  >
                    + Escolher 2º Produto...
                  </button>
                  {dropdownOpen === 2 && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-y-auto bg-white border border-[#EBE6DD] rounded-xl shadow-xl p-1.5 space-y-1 animate-fadeIn">
                      {getAvailableProducts().map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            onAddProduct(p);
                            setDropdownOpen(null);
                          }}
                          className="w-full text-left px-3 py-2 text-xs rounded-lg hover:bg-[#FAF8F5] transition-colors flex items-center justify-between"
                        >
                          <span>{p.name} <u className="no-underline text-[#A06C5E]">({p.brand})</u></span>
                          <span className="font-mono text-[10px]">R$ {p.price}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Table Data Content rows */}
          <div className="divide-y divide-[#EBE6DD]">
            {attributes.map((attr, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-3 items-center p-6 gap-4 hover:bg-[#FAF8F5]/30 transition-colors"
              >
                {/* Attr Label */}
                <span className="text-xs font-mono font-bold tracking-wider text-[#7C776E] uppercase italic md:text-left">
                  {attr.label}
                </span>

                {/* Col 1 Value */}
                <div className="text-sm text-[#1F1D1B] md:text-left">
                  {selectedProducts[0] ? (
                    <span className="font-sans leading-relaxed block font-medium">
                      {attr.getValue(selectedProducts[0])}
                    </span>
                  ) : (
                    <span className="text-xs text-zinc-400 font-mono italic">— Selecione o produto 1 —</span>
                  )}
                </div>

                {/* Col 2 Value */}
                <div className="text-sm text-[#1F1D1B] md:text-left">
                  {selectedProducts[1] ? (
                    <span className="font-sans leading-relaxed block font-medium">
                      {attr.getValue(selectedProducts[1])}
                    </span>
                  ) : (
                    <span className="text-xs text-zinc-400 font-mono italic">— Selecione o produto 2 —</span>
                  )}
                </div>
              </div>
            ))}

            {/* CTA action buttons Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6 items-center bg-[#FAF8F5]/50">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#CA9586]">
                ADICIONAR À SACOLA
              </span>

              {/* Col 1 CTA */}
              <div>
                {selectedProducts[0] ? (
                  <button
                    onClick={() => onAddToCart(selectedProducts[0])}
                    className="w-full px-4 py-2.5 rounded-full bg-[#1F1D1B] hover:bg-[#CA9586] text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm text-center block"
                  >
                    Adicionar {selectedProducts[0].brand}
                  </button>
                ) : (
                  <span className="text-zinc-400 text-xs italic">—</span>
                )}
              </div>

              {/* Col 2 CTA */}
              <div>
                {selectedProducts[1] ? (
                  <button
                    onClick={() => onAddToCart(selectedProducts[1])}
                    className="w-full px-4 py-2.5 rounded-full bg-[#1F1D1B] hover:bg-[#CA9586] text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm text-center block"
                  >
                    Adicionar {selectedProducts[1].brand}
                  </button>
                ) : (
                  <span className="text-zinc-400 text-xs italic">—</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

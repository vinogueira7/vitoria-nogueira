import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Os aparelhos vendidos pela GlowPro são originais com Nota Fiscal?',
      answer: 'Sim, absolutamente! Todos os aparelhos expostos em nosso portal são importados diretamente via distribuidores autorizados ou adquiridos diretamente com os fabricantes oficiais (Dyson Inc, ghd Hair UK, L\'Oréal Group, Parlux, etc.). Todos os envios são lacrados de fábrica com selo holográfico de autenticidade, acompanham Nota Fiscal eletrônica brasileira e carregam plugues homologados oficialmente pelo padrão de segurança Inmetro.'
    },
    {
      question: 'Como funciona o sistema de garantia nacional no Brasil?',
      answer: 'Fornecemos cobertura nacional integral contra defeitos de fabricação ou vícios elétricos. Os tempos de garantia variam conforme as homologações das marcas de luxo: Aparelhos Dyson contam com 2 anos de garantia oficial securitizada; ghd e L\'Oréal SteamPod contam com até 3 anos contra qualquer degradação precoce de bobinas ou circuitos térmicos.'
    },
    {
      question: 'Quais aparelhos são Bivolt Automático?',
      answer: 'As pranchas e modeladores ghd (Platinum+ e Creative Curve), a prancha a vapor L\'Oréal SteamPod 4.0 e o modelador automático MiraCurl possuem tecnologia Bivolt Automático inteligente de alta tolerância (funcionam perfeitamente de 110V a 240V, chaveando sem perda de calor). Para secadores profissionais com alta amperagem de resistência térmica (como Parlux Alyon e Taiff Vulcan Unique), disponibilizamos a escolha de modelos específicos de 110V ou 220V para garantir a máxima rotação e potência real.'
    },
    {
      question: 'Aparelhos térmicos podem quebrar cabelos descoloridos ou volumosos?',
      answer: 'Pranchas analógicas baratas aquecem de forma irregular e flutuam entre picos perigosos de até 270°C, destruindo instantaneamente a queratina capilar. As marcas de luxo que comercializamos utilizam micro-termóstatos inteligentes. A ghd Platinum+, por exemplo, calibra 250 vezes por segundo para reter a temperatura estrita de segurança de 185°C — cientificamente comprovada como ideal para alinhar sem causar fusão cortical do fio, prevenindo até 70% da quebra capilar.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#EBE6DD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content faq */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9586]/10 text-[#A06C5E] text-xs font-mono uppercase tracking-widest font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Suporte de Engenharia GlowPro</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1D1B] tracking-tight font-extrabold">
            Dúvidas Frequentes & Esclarecimentos Técnicos
          </h2>
          <p className="text-sm text-[#7C776E] max-w-lg mx-auto">
            Tem dúvidas sobre o funcionamento, selos Inmetro ou garantia? Clique para expandir as análises detalhadas.
          </p>
        </div>

        {/* Accordions List container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#EDE9E2] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] transition-colors flex items-center justify-between gap-4 font-sans select-none cursor-pointer"
                >
                  <span className="font-bold text-[#1F1D1B] text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-[#CA9586] flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 py-5 bg-white border-t border-[#EDE9E2] text-[#5C5751] text-xs sm:text-sm leading-relaxed text-left font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Secure seal bar footer under FAQ */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1F1D1B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-xl bg-[#CA9586]/20 text-[#CA9586] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold font-sans">Canal Oficial de Atendimento</h4>
              <p className="text-[11px] text-zinc-400 font-sans mt-0.5">Fale diretamente pelo e-mail vnogueira838@gmail.com ou pelo chat integrado.</p>
            </div>
          </div>
          <span className="px-4 py-2 rounded-full border border-zinc-700 font-mono text-[11px] tracking-wider text-zinc-300">
            SECURE CHECKOUT 🔐
          </span>
        </div>

      </div>
    </section>
  );
}

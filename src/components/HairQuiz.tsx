import React, { useState } from 'react';
import { Sparkles, Smile, Flame, Activity, ZapOff, Scissors, Wind, Heart, CalendarDays, PartyPopper, Award, RefreshCw, ShoppingCart, HelpCircle } from 'lucide-react';
import { QUIZ_QUESTIONS, getQuizRecommendation } from '../data';
import { Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface HairQuizProps {
  onAddToCart: (product: Product) => void;
  onScrollTo: (elementId: string) => void;
}

export default function HairQuiz({ onAddToCart, onScrollTo }: HairQuizProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [recommendedProduct, setRecommendedProduct] = useState<Product | null>(null);

  // Helper mapping icon names to actual Lucide component instances
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'ZapOff': return <ZapOff className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'CalendarDays': return <CalendarDays className="w-5 h-5" />;
      case 'PartyPopper': return <PartyPopper className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  const handleSelectOption = (questionId: number, value: string) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate dynamic recommendation immediately
      const recommended = getQuizRecommendation(updatedAnswers);
      setRecommendedProduct(recommended);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendedProduct(null);
  };

  const activeQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-[#FBF9F7] to-[#F5ECE2] border-b border-[#EBE6DD] overflow-hidden relative">
      <div className="absolute left-[-15%] top-1/4 w-[350px] h-[350px] rounded-full bg-[#CA9586]/10 blur-[80px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-1/4 w-[350px] h-[350px] rounded-full bg-orange-200/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header summary info */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1D1B] text-[#FFF0E9] text-xs font-mono uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#CA9586] animate-pulse" />
            <span>Consultoria Digital Inteligente</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1D1B] tracking-tight font-extrabold">
            Encontre o Aparelho de Alinhamento Perfeito
          </h2>
          <p className="text-sm sm:text-base text-[#6B665E] max-w-xl mx-auto">
            Responda 3 perguntas rápidas sobre a estrutura dos seus fios e obtenha a indicação da tecnologia ideal homologada por tricologistas.
          </p>
        </div>

        {/* Dynamic Card Container with high-end framing */}
        <div className="bg-white rounded-3xl border border-[#EDE9E2] shadow-xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!recommendedProduct ? (
              <motion.div
                key={activeQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                {/* Step ticker */}
                <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#7C776E]">
                  <span>Pergunta {activeQuestion.id} de {QUIZ_QUESTIONS.length}</span>
                  <span className="text-[#CA9586]">Glow Diagnose</span>
                </div>

                {/* Question line */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#1F1D1B] font-extrabold leading-snug">
                  {activeQuestion.question}
                </h3>

                {/* Layout Grid of Answers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeQuestion.options.map((opt) => (
                    <motion.button
                      key={opt.value}
                      onClick={() => handleSelectOption(activeQuestion.id, opt.value)}
                      whileHover={{ scale: 1.015, borderColor: '#CA9586', backgroundColor: '#FAF8F5' }}
                      whileTap={{ scale: 0.985 }}
                      className="text-left p-5 rounded-2xl border border-[#E1DBCE] transition-all duration-200 cursor-pointer flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-[#CA9586]/10 text-[#CA9586] flex-shrink-0">
                        {getIcon(opt.icon)}
                      </div>
                      <div className="space-y-0.5">
                        <span className="block font-sans text-sm font-semibold text-[#1F1D1B] leading-snug">
                          {opt.label}
                        </span>
                        <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                          Selecionar
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Progress bar represent styling mechanics */}
                <div className="w-full bg-[#FAF8F5] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#CA9586] to-[#E3B2A5] h-full transition-all duration-300"
                    style={{ width: `${((currentStep) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </motion.div>
            ) : (
              /* Recommendation Screen Panel */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Result column 1: Image & Labeling */}
                <div className="lg:col-span-5 relative flex justify-center flex-col items-center">
                  <div className="w-full max-w-[260px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#EBE6DD] bg-[#FAF8F5] shadow-lg">
                    <img
                      src={recommendedProduct.image}
                      alt={recommendedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="block text-[10px] font-mono text-[#A06C5E] uppercase tracking-widest font-extrabold mt-4">
                    RECOMENDADO PELO DIAGNÓSTICO
                  </span>
                </div>

                {/* Result column 2: Info & CTAs */}
                <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 font-mono text-[10px] font-bold uppercase tracking-wider">
                    98% de Compatibilidade Com Seus Fios
                  </span>

                  <h3 className="text-2xl font-serif text-[#1F1D1B] font-bold tracking-tight">
                    {recommendedProduct.name}
                  </h3>

                  <p className="text-sm text-[#5C5751] leading-relaxed">
                    {recommendedProduct.description} Suas especificações técnicas de {recommendedProduct.specs.technology} fornecem o alinhamento definitivo ideal para a sua rotina e perfil capilar de forma segura e brilhosa.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E1DBCE] inline-block w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#7C776E] uppercase">Preço Especial Quiz (-10%):</span>
                      <span className="text-xl font-mono font-bold text-[#1F1D1B]">
                        R$ {(recommendedProduct.price * 0.9).toFixed(0)} à vista no PIX
                      </span>
                    </div>
                    <span className="block text-[10px] text-[#A06C5E] font-sans mt-1 text-right">
                      ou 12x de R$ {(recommendedProduct.price / 12).toFixed(2)} no cartão de crédito
                    </span>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => onAddToCart(recommendedProduct)}
                      className="flex-1 px-6 py-3.5 rounded-full bg-[#1F1D1B] hover:bg-[#CA9586] text-white text-xs font-bold tracking-wide transition-all cursor-pointer shadow flex items-center justify-center gap-2 uppercase"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Garantir Meu Aparelho</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3.5 rounded-full border border-[#D9D3C8] text-[#524E48] text-xs font-bold tracking-wide hover:border-[#CA9586] hover:text-[#CA9586] transition-all cursor-pointer bg-white flex items-center justify-center gap-1.5 uppercase"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Refazer Diagnóstico</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { SlidersHorizontal, Layers, Sparkles, Flame } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductComparison from './components/ProductComparison';
import HairQuiz from './components/HairQuiz';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { PRODUCTS } from './data';
import { Product, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'straighteners' | 'dryers' | 'curlers'>('all');
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add item to cart with feedback opening the slide drawer
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].quantity += 1;
        return copy;
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Handlers for products technically compared (limits to max 2 items)
  const handleSelectCompare = (product: Product) => {
    setComparedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 2) {
        // Replaces the second item or resets the array
        const copy = [...prev];
        copy[1] = product;
        return copy;
      }
      return [...prev, product];
    });
    // Scroll smoothly to comparisons so they see their selection
    handleScrollTo('compare');
  };

  const handleRemoveCompare = (productId: string) => {
    setComparedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleAddCompare = (product: Product) => {
    setComparedProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      if (prev.length >= 2) {
        const copy = [...prev];
        copy[1] = product;
        return copy;
      }
      return [...prev, product];
    });
  };

  // Filter main products list inside UI
  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBF9F7] text-[#2B2927] font-sans antialiased selection:bg-[#CA9586] selection:text-white">
      {/* Top Header navbar container */}
      <Header
        cartCount={cartTotalCount}
        onOpenCart={() => setCartOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Main content body wrap */}
      <main id="hero">
        {/* Aesthetic Intro Hero Block */}
        <Hero onScrollTo={handleScrollTo} />

        {/* Product Catalog Showcase Section */}
        <section id="products" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section titles */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA9586]/10 text-[#A06C5E] text-xs font-mono uppercase tracking-widest font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Grades Tecnológicas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1F1D1B] tracking-tight font-extrabold">
              Nossa Curadoria Oficial Autorizada
            </h2>
            <p className="text-sm sm:text-base text-[#6B665E] leading-relaxed">
              Utilitários térmicos originais importados com alta condutividade iônica. Escolha sua categoria desejada abaixo para iniciar o alinhamento dos fios.
            </p>

            {/* Filter Switche Tab Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {[
                { id: 'all', label: 'Todos os Aparelhos' },
                { id: 'straighteners', label: 'Chapinhas & Pranchas v1' },
                { id: 'dryers', label: 'Secadores Profissionais' },
                { id: 'curlers', label: 'Modeladores & Babyliss' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#1F1D1B] text-white shadow shadow-black/10'
                      : 'bg-white text-[#524E48] border border-[#E1DBCE] hover:border-[#CA9586] hover:bg-[#FAF8F5]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of Cards showing curated electronic utilities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onAddToCart={handleAddToCart}
                  onSelectCompare={handleSelectCompare}
                  isCompared={comparedProducts.some((p) => p.id === prod.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Personalized Hair Diagnostic Quiz component */}
        <HairQuiz onAddToCart={handleAddToCart} onScrollTo={handleScrollTo} />

        {/* Technical Specification Side-By-Side Comparison Grid */}
        <ProductComparison
          selectedProducts={comparedProducts}
          onRemoveProduct={handleRemoveCompare}
          onAddProduct={handleAddCompare}
          onAddToCart={handleAddToCart}
        />

        {/* Verified reviews, stars and text testimonials */}
        <Testimonials />

        {/* Support, Accordions, Warranties, seals FAQ */}
        <FAQ />
      </main>

      {/* Floating sliding Shopping Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <CartDrawer
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        )}
      </AnimatePresence>

      {/* Footer trade and legal indices component */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}

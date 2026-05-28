import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, Check, Award, Flame, CreditCard, Landmark, Truck } from 'lucide-react';
import { CartItem, Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number; fixed: number } | null>(null);
  const [couponError, setCouponError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [cep, setCep] = useState('');
  const [cepCalculated, setCepCalculated] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Totals calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Coupon logic
  const handleApplyCoupon = () => {
    setCouponError('');
    const code = couponCode.toUpperCase().trim();
    if (code === 'GLOW10') {
      setAppliedDiscount({ code: 'GLOW10', percent: 10, fixed: 0 });
    } else if (code === 'BEYOND') {
      setAppliedDiscount({ code: 'BEYOND', percent: 0, fixed: 150 });
    } else {
      setCouponError('Cupom inválido ou expirado.');
    }
  };

  const getDiscountAmount = () => {
    if (!appliedDiscount) return 0;
    if (appliedDiscount.percent > 0) return (subtotal * appliedDiscount.percent) / 100;
    return appliedDiscount.fixed;
  };

  const discountAmount = getDiscountAmount();
  const baseTotal = subtotal - discountAmount;
  
  // PIX gets 10% extra discount off the total
  const finalTotal = paymentMethod === 'pix' ? baseTotal * 0.9 : baseTotal;
  const pixSavings = paymentMethod === 'pix' ? baseTotal * 0.1 : 0;

  const handleSimulateCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length >= 8) {
      setCepCalculated(true);
    }
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
  };

  const handleCloseAndReset = () => {
    setCheckoutSuccess(false);
    setCepCalculated(false);
    setCep('');
    setAppliedDiscount(null);
    setCouponCode('');
    onClearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop fading */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-[#1F1D1B]/40 backdrop-blur-xs transition-opacity cursor-pointer" 
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="w-screen max-w-md bg-[#FBF9F7] shadow-xl flex flex-col h-full border-l border-[#EBE6DD]"
        >
          {/* Header section */}
          <div className="p-6 border-b border-[#EBE6DD] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#CA9586]" />
              <h2 className="text-lg font-serif font-bold text-[#1F1D1B]">Minha Sacola</h2>
              <span className="bg-[#1F1D1B] text-white text-xs font-bold px-2 py-0.5 rounded-full font-mono">
                {cartItems.length}
              </span>
            </div>
            <button
               onClick={onClose}
               className="p-2 -mr-2 rounded-full text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conditional success modal cover */}
          {checkoutSuccess ? (
            <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 animate-bounce">
                <Check className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-[#1F1D1B]">Pedido Pré-Aprovado com Sucesso!</h3>
                <p className="text-sm text-[#5C5751] font-sans">
                  Enviamos as instruções de pagamento e o código de rastreamento provisório para o endereço de e-mail <strong className="text-black font-semibold">vnogueira838@gmail.com</strong>.
                </p>
              </div>

              {paymentMethod === 'pix' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-3 w-full">
                  <span className="block text-[11px] font-mono tracking-widest text-[#105E3D] font-extrabold uppercase">CÓDIGO PIX COPIA E COLA</span>
                  <div className="bg-white p-2.5 rounded border border-emerald-100 text-[10px] font-mono text-zinc-600 select-all break-all cursor-pointer">
                    00020101021226830014BR.GOV.BCB.PIX2561api.glowpro.com/v2/payment/sec/glow-e7e89e-2026-vnogueira838
                  </div>
                  <span className="block text-[9px] text-[#5C5751]">Clique no código acima para copiar e efetuar o checkout.</span>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EBE6DD] w-full text-left space-y-1 text-xs">
                <div className="flex justify-between font-bold">
                  <span>Modo de Envio:</span>
                  <span>Frete Expresso Grátis 🚚</span>
                </div>
                <div className="flex justify-between font-bold text-[#CA9586]">
                  <span>Total Final Pago:</span>
                  <span>R$ {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              <button
                onClick={handleCloseAndReset}
                className="w-full py-4 rounded-full bg-[#1F1D1B] text-white hover:bg-[#CA9586] transition-all font-semibold uppercase text-xs tracking-wider cursor-pointer font-bold"
              >
                Voltar à Loja
              </button>
            </div>
          ) : (
            <>
              {/* Product list listview */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag className="w-12 h-12 text-[#E1DBCE]" />
                    <div>
                      <p className="text-sm font-bold text-[#1F1D1B]">Sua sacola está vazia</p>
                      <p className="text-xs text-[#7C776E] mt-1">Navegue pelas nossas vitrines para escolher os melhores aparelhos.</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#EDE9E2] relative"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-[#EBE6DD]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0 text-left">
                        <span className="block text-[9px] font-mono font-bold text-[#CA9586] uppercase tracking-wider">
                          {item.product.brand}
                        </span>
                        <h4 className="text-xs font-bold text-[#1F1D1B] truncate leading-tight">
                          {item.product.name}
                        </h4>
                        <span className="block text-xs font-mono font-bold text-[#1F1D1B] mt-1">
                          R$ {item.product.price.toLocaleString('pt-BR')},00
                        </span>

                        {/* Qty changer buttons */}
                        <div className="flex items-center space-x-2.5 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 rounded bg-[#FAF8F5] border border-[#EBE6DD] hover:bg-[#EBE6DD] text-zinc-650 cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 rounded bg-[#FAF8F5] border border-[#EBE6DD] hover:bg-[#EBE6DD] text-zinc-650 cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove item trigger link */}
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="absolute top-4 right-4 text-zinc-400 hover:text-[#CA9586] p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                /* Totals, Coupons & checkout selectors panel */
                <div className="p-6 border-t border-[#EBE6DD] bg-[#FAF8F5] space-y-4">
                  {/* Freight simulation field */}
                  <form onSubmit={handleSimulateCep} className="flex gap-2 items-center">
                    <Truck className="w-4 h-4 text-[#CA9586]/70 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder="Simular Cep (ex: 01310-100)"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      maxLength={9}
                      className="flex-1 bg-white border border-[#E1DBCE] px-3 py-1.5 rounded-xl text-xs font-mono placeholder:text-zinc-400 focus:outline-none focus:border-[#CA9586]"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-[#1F1D1B] text-white text-xs font-sans font-bold cursor-pointer"
                    >
                      Calcular
                    </button>
                  </form>
                  {cepCalculated && (
                    <div className="text-left text-[11px] text-emerald-700 font-bold flex justify-between bg-emerald-500/10 p-2 rounded-lg">
                      <span>Prazo Provisório de Entrega:</span>
                      <span>Sedex Grátis (2 a 4 dias úteis) ✅</span>
                    </div>
                  )}

                  {/* Coupon layout */}
                  <div className="space-y-1.5 text-left">
                    <span className="block text-[10px] font-mono text-[#7C776E] tracking-widest uppercase">POSSUI CUPOM DE DESCONTO?</span>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Cupom (ex: GLOW10)"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="w-full bg-white border border-[#E1DBCE] pl-9 pr-3 py-1.5 rounded-xl text-xs font-mono uppercase focus:outline-none focus:border-[#CA9586]"
                        />
                      </div>
                      <button
                        onClick={handleApplyCoupon}
                        className="px-3.5 py-1.5 rounded-xl border border-[#D9D3C8] text-[#1F1D1B] text-xs font-bold bg-white hover:border-[#CA9586] cursor-pointer"
                      >
                        Aplicar
                      </button>
                    </div>
                    {couponError && <p className="text-[10px] text-red-500 font-mono italic">{couponError}</p>}
                    {appliedDiscount && (
                      <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Cupom {appliedDiscount.code} ativado!
                      </p>
                    )}
                  </div>

                  {/* Payment method toggle */}
                  <div className="space-y-1">
                    <span className="block text-[10px] font-mono text-[#7C776E] tracking-widest uppercase text-left">MÉTODO DE PAGAMENTO</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPaymentMethod('pix')}
                        className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase cursor-pointer ${
                          paymentMethod === 'pix'
                            ? 'bg-[#1F1D1B] text-white border-[#1F1D1B]'
                            : 'bg-white text-zinc-650 border-[#E1DBCE]'
                        }`}
                      >
                        <Landmark className="w-3.5 h-3.5" />
                        <span>PIX (10% OFF!)</span>
                      </button>
                      <button
                        onClick={() => setPaymentMethod('card')}
                        className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-xs font-mono font-bold uppercase cursor-pointer ${
                          paymentMethod === 'card'
                            ? 'bg-[#1F1D1B] text-white border-[#1F1D1B]'
                            : 'bg-white text-zinc-650 border-[#E1DBCE]'
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Cartão 12x</span>
                      </button>
                    </div>
                  </div>

                  {/* Pricing sub-calculations sheet */}
                  <div className="space-y-1.5 border-t border-[#EBE6DD] pt-3 text-sm text-left">
                    <div className="flex justify-between">
                      <span className="text-[#7C776E] font-sans">Subtotal:</span>
                      <span className="font-mono text-[#1F1D1B]">
                        R$ {subtotal.toLocaleString('pt-BR')},00
                      </span>
                    </div>

                    {appliedDiscount && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Desconto Cupom ({appliedDiscount.code}):</span>
                        <span className="font-mono">- R$ {discountAmount.toLocaleString('pt-BR')},00</span>
                      </div>
                    )}

                    {paymentMethod === 'pix' && (
                      <div className="flex justify-between text-emerald-600 font-semibold">
                        <span>Desconto Boleto/PIX (10%):</span>
                        <span className="font-mono">- R$ {pixSavings.toLocaleString('pt-BR', { maximumFractionDigits: 0 })},00</span>
                      </div>
                    )}

                    <div className="flex justify-between font-serif font-bold text-base border-t border-dashed border-[#EBE6DD] pt-2 text-[#1F1D1B]">
                      <span className="uppercase">VALOR FINAL:</span>
                      <span className="font-mono">
                        R$ {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>

                    {paymentMethod === 'card' && (
                      <span className="block text-[10px] text-zinc-400 font-sans mt-0.5 text-right italic">
                        ou em até 12 parcelas mensais sem juros de R$ {(finalTotal / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    )}
                  </div>

                  {/* Checkout Submit trigger button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-full bg-[#CA9586] hover:bg-[#1F1D1B] text-white text-xs font-mono font-bold tracking-widest uppercase transition-all shadow-md shadow-[#CA9586]/10 cursor-pointer"
                  >
                    Finalizar Pré-Pedido
                  </button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}

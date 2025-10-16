import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, ShoppingBag, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CartSidebar = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveFromCart, totalPrice, onCheckout }) => {
  const { toast } = useToast();

  const handleCheckout = () => {
    onClose();
    onCheckout();
    toast({
      title: "🚀 Order Placed!",
      description: "Just kidding! To enable real payments, ask me to integrate Stripe. Your cart has been cleared for now.",
      duration: 5000,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              <Button variant="ghost" size="icon" onClick={onClose} className="text-muted-foreground hover:bg-accent">
                <X className="h-6 w-6" />
              </Button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
                <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
                <Button onClick={onClose} className="mt-6 bg-yellow-400 text-black hover:bg-yellow-500">Start Shopping</Button>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img  alt={item.name} className="w-20 h-20 object-cover rounded-lg" src="https://images.unsplash.com/photo-1632813405318-1a453ecac8bf" />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-white truncate">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 border-border">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-white w-8 text-center font-semibold">{item.quantity}</span>
                          <Button variant="outline" size="icon" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 border-border">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => onRemoveFromCart(item.id)} className="text-muted-foreground hover:text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-white">Total:</span>
                    <span className="text-2xl font-bold gradient-text">${totalPrice}</span>
                  </div>
                  <Button onClick={handleCheckout} size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shiny-effect">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Checkout
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
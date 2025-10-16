import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const useCart = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('tshirt-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tshirt-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1, selectedSize: 'M', selectedColor: product.colors[0] }]);
    }
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.name} has been added to your cart.`,
      variant: 'default',
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    toast({
      title: "Removed from Cart",
      description: "Item has been removed from your cart.",
      variant: 'destructive'
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const clearCart = () => {
    setCart([]);
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return { cart, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, setCart, clearCart };
};
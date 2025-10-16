import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useCart } from '@/hooks/useCart';
import { useFavorites } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/SupabaseAuthContext';

import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import AdminPage from '@/pages/AdminPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import CartSidebar from '@/components/cart/CartSidebar';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const { user, signOut } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout user={user} onCartClick={() => setIsCartOpen(true)} totalItems={getTotalItems()} onLogout={signOut} />}>
          <Route index element={
            <HomePage 
              onAddToCart={addToCart} 
              onToggleFavorite={toggleFavorite}
              favorites={favorites}
            />} 
          />
          <Route path="admin" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
      
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        totalPrice={getTotalPrice()}
        onCheckout={clearCart}
      />

      <Toaster />
    </>
  );
}

export default App;
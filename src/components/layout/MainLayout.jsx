import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MainLayout = ({ user, onCartClick, totalItems, onLogout }) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header 
        user={user} 
        onCartClick={onCartClick} 
        totalItems={totalItems} 
        onLogout={onLogout} 
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
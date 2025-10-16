import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shirt, ShoppingBag, Menu, X, LogOut, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ user, onCartClick, totalItems, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/#products' },
    { name: 'About', href: '/#about' }
  ];

  if (user) {
      navLinks.push({ name: 'Admin', href: '/admin' });
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mt-4 mx-4 md:mx-auto md:max-w-4xl lg:max-w-6xl p-3 md:p-2 rounded-xl glass-morphism">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Shirt className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">T-shirt & More</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-black/20 p-1 rounded-lg">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {user ? (
                <div className="flex items-center gap-2">
                    <UserCircle className="h-6 w-6 text-gray-300 hidden sm:block" />
                    <span className="text-sm font-medium hidden sm:block">{user.email.split('@')[0]}</span>
                    <Button variant="ghost" size="icon" onClick={onLogout} className="text-gray-300 hover:bg-white/10 hover:text-white">
                        <LogOut className="h-5 w-5" />
                    </Button>
                </div>
            ) : (
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="outline" className="border-border text-foreground hover:bg-accent" asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                        <Link to="/signup">Sign Up</Link>
                    </Button>
                </div>
            )}
            <Button variant="ghost" size="icon" onClick={onCartClick} className="relative text-gray-300 hover:bg-white/10 hover:text-white">
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                  {totalItems}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)} className="md:hidden text-gray-300 hover:bg-white/10 hover:text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/80 z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 h-full w-64 bg-background p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4">
                <X className="h-6 w-6" />
              </Button>
              <div className="mt-12 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-colors">
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-border pt-6 mt-4 space-y-4">
                    {user ? (
                         <Button variant="outline" onClick={() => { onLogout(); setIsMenuOpen(false); }} className="w-full">
                            <LogOut className="w-5 h-5 mr-2" /> Logout
                        </Button>
                    ) : (
                        <>
                        <Button asChild className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                            <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                        </Button>
                         <Button asChild variant="outline" className="w-full border-border text-foreground hover:bg-accent">
                            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                        </Button>
                        </>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
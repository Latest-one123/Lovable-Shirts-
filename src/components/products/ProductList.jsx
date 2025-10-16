import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { Loader2 } from 'lucide-react';

const ProductList = ({ onAddToCart, onToggleFavorite, favorites }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*');
      
      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
        
        const categoryCounts = data.reduce((acc, p) => {
          acc[p.category] = (acc[p.category] || 0) + 1;
          return acc;
        }, {});

        const fetchedCategories = [
          { id: 'all', name: 'All Products', count: data.length },
          ...Object.entries(categoryCounts).map(([name, count]) => ({
            id: name,
            name: name.charAt(0).toUpperCase() + name.slice(1),
            count
          }))
        ];
        setCategories(fetchedCategories);
      }
      setLoading(false);
    };

    fetchProductsAndCategories();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 bg-pattern">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Our Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked designs that speak to your personality. From bold graphics to minimalist styles.
          </p>
        </motion.div>

        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <Loader2 className="h-12 w-12 animate-spin text-yellow-400" />
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={favorites.includes(product.id)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
            <p className="text-xl text-muted-foreground">No threads found. Try a different search!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
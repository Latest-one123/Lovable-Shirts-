import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorite }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-muted/30 border border-border rounded-2xl overflow-hidden group product-card-hover"
    >
      <div className="relative">
        <img 
          alt={`${product.name} - ${product.description}`}
          className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
         src={product.image_url || "https://images.unsplash.com/photo-1603113730470-780cbb2f32ca"} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleFavorite(product.id, product.name)}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full h-10 w-10"
        >
          <Heart className={`h-5 w-5 transition-all ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </Button>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white truncate">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-white">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          <div className="flex -space-x-2">
            {product.colors.map(color => (
              <div
                key={color}
                className={`w-5 h-5 rounded-full border-2 border-background`}
                style={{ backgroundColor: color === 'yellow' ? '#facc15' : color }}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-black gradient-text">${product.price}</span>
          <Button onClick={() => onAddToCart(product)} className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500 shiny-effect">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
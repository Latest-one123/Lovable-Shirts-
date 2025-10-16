import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export const useFavorites = () => {
  const { toast } = useToast();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('tshirt-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tshirt-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId, productName) => {
    const isFavorite = favorites.includes(productId);
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== productId));
      toast({
        title: "Removed from Favorites",
        description: `${productName} removed from your favorites.`,
        variant: 'destructive',
      });
    } else {
      setFavorites([...favorites, productId]);
      toast({
        title: "Added to Favorites! ❤️",
        description: `${productName} added to your favorites.`,
        variant: 'default',
      });
    }
  };

  return { favorites, toggleFavorite };
};
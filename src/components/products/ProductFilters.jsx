import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProductFilters = ({ categories, selectedCategory, onSelectCategory, searchQuery, onSearchChange }) => {
  const { toast } = useToast();

  return (
    <div className="mb-12 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <input
            type="text"
            placeholder="Search for your next favorite tee..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-muted/30 border border-border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-muted-foreground"
          />
        </div>
        <Button variant="outline" className="w-full md:w-auto border-border text-foreground hover:bg-accent" onClick={() => toast({ title: "🚧 Advanced filters coming soon!", description: "You can request this feature in your next prompt! 🚀", duration: 3000 })}>
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onSelectCategory(category.id)}
            className={`${selectedCategory === category.id ? "bg-yellow-400 text-black hover:bg-yellow-500" : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
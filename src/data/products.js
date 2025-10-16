export const products = [
  {
    id: 1,
    name: 'Urban Rebel Tee',
    price: 29.99,
    category: 'graphic',
    rating: 4.8,
    reviews: 124,
    colors: ['black', 'white', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bold street-style graphic tee for the modern rebel'
  },
  {
    id: 2,
    name: 'Neon Dreams Shirt',
    price: 34.99,
    category: 'neon',
    rating: 4.9,
    reviews: 89,
    colors: ['black', 'yellow'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Vibrant neon design that glows with attitude'
  },
  {
    id: 3,
    name: 'Minimalist Classic',
    price: 24.99,
    category: 'basic',
    rating: 4.7,
    reviews: 203,
    colors: ['white', 'black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Clean, simple design for everyday wear'
  },
  {
    id: 4,
    name: 'Thunder Strike Tee',
    price: 32.99,
    category: 'graphic',
    rating: 4.8,
    reviews: 156,
    colors: ['black', 'yellow', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Electric design that commands attention'
  },
  {
    id: 5,
    name: 'Golden Hour Shirt',
    price: 27.99,
    category: 'artistic',
    rating: 4.6,
    reviews: 78,
    colors: ['yellow', 'white'],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Artistic print inspired by golden sunsets'
  },
  {
    id: 6,
    name: 'Shadow Walker Tee',
    price: 31.99,
    category: 'dark',
    rating: 4.9,
    reviews: 167,
    colors: ['black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Dark aesthetic for the mysterious soul'
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'graphic', name: 'Graphic Tees', count: products.filter(p => p.category === 'graphic').length },
  { id: 'neon', name: 'Neon Collection', count: products.filter(p => p.category === 'neon').length },
  { id: 'basic', name: 'Basics', count: products.filter(p => p.category === 'basic').length },
  { id: 'artistic', name: 'Artistic', count: products.filter(p => p.category === 'artistic').length },
  { id: 'dark', name: 'Dark Series', count: products.filter(p => p.category === 'dark').length }
];
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern pt-24 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10"></div>
      <div className="container px-4 mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="block text-white">Wear Your</span>
              <span className="block gradient-text">Story.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8">
              Discover exclusive, high-quality printed T-shirts that define your style. From bold graphics to minimalist cool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-yellow-400 text-black font-semibold hover:bg-yellow-500 shiny-effect text-base px-8" asChild>
                <a href="#products">
                  Explore Collection <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 border-border hover:bg-accent hover:text-accent-foreground" onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀", duration: 3000 })}>
                Latest Drops
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                animate={{ y: [-10, 10] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 4, ease: 'easeInOut' }}
                className="w-full h-full"
              >
                <img 
                  alt="A stylish person wearing a modern graphic t-shirt in a city setting"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl shadow-yellow-500/10"
                 src="https://images.unsplash.com/photo-1585631858874-c9aa0189c842" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
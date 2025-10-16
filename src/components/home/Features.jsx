import React from 'react';
import { motion } from 'framer-motion';
import { Award, Feather, Rocket } from 'lucide-react';

const featureList = [
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Premium Quality",
    description: "100% cotton fabric with superior printing for lasting comfort and style.",
  },
  {
    icon: <Feather className="w-8 h-8 text-yellow-400" />,
    title: "Unique Designs",
    description: "Exclusive artwork created by talented designers for the youth culture.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    title: "Fast Shipping",
    description: "Quick delivery worldwide with tracking and secure packaging.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Why Choose Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just a brand; we're a statement. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-muted/30 border border-border rounded-2xl p-8 text-center shiny-effect"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/10 border-2 border-yellow-400/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
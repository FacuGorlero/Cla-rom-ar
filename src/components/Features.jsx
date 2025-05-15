
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Tv, Utensils, Wind, Car, ShowerHead } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="h-10 w-10 text-primary" />,
    title: 'WiFi Gratis',
    description: 'Conexión a internet de alta velocidad en todos los departamentos.'
  },
  {
    icon: <Tv className="h-10 w-10 text-primary" />,
    title: 'Smart TV',
    description: 'Televisores con Netflix y servicios de streaming incluidos.'
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: 'Cocina Completa',
    description: 'Equipada con todos los utensilios necesarios para tu estadía.'
  },
  {
    icon: <Wind className="h-10 w-10 text-primary" />,
    title: 'Aire Acondicionado',
    description: 'Climatización frío/calor para tu máximo confort.'
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: 'Estacionamiento',
    description: 'Cochera privada para tu vehículo sin costo adicional.'
  },
  {
    icon: <ShowerHead className="h-10 w-10 text-primary" />,
    title: 'Agua Caliente',
    description: 'Sistema de agua caliente central disponible 24/7.'
  }
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comodidades que <span className="text-primary">Ofrecemos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros departamentos están equipados con todo lo necesario para que disfrutes de unas vacaciones perfectas en Villa Gesell.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-muted rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

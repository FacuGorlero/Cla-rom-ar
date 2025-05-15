
import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Vista de la playa en Villa Gesell",
      caption: "Playa cercana"
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Interior de departamento, sala de estar",
      caption: "Sala de estar"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Cocina completamente equipada",
      caption: "Cocina equipada"
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Dormitorio principal con cama matrimonial",
      caption: "Dormitorio principal"
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Baño moderno con ducha",
      caption: "Baño completo"
    },
    {
      src: "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "Balcón con vista al jardín",
      caption: "Balcón"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galería de <span className="text-primary">Imágenes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestros departamentos y las hermosas vistas que podrás disfrutar durante tu estadía en Villa Gesell.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

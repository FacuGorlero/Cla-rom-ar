
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Bed, Bath, Maximize, Calendar } from 'lucide-react';

const apartmentsData = [
  {
    id: 1,
    name: 'Departamento Familiar',
    description: 'Amplio departamento con vista al jardín, ideal para familias con niños. Cuenta con dos dormitorios y todas las comodidades.',
    capacity: '6 personas',
    bedrooms: '2 dormitorios',
    bathrooms: '1 baño',
    size: '65m²',
    price: '$15,000',
    priceDetail: 'por noche en temporada alta',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 2,
    name: 'Suite Deluxe',
    description: 'Departamento de lujo con vista parcial al mar. Decoración moderna y elegante con todas las comodidades premium.',
    capacity: '4 personas',
    bedrooms: '2 dormitorios',
    bathrooms: '2 baños',
    size: '55m²',
    price: '$18,000',
    priceDetail: 'por noche en temporada alta',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    name: 'Monoambiente Costero',
    description: 'Acogedor monoambiente a pocas cuadras de la playa. Perfecto para parejas o viajeros solitarios que buscan comodidad.',
    capacity: '2 personas',
    bedrooms: '1 ambiente',
    bathrooms: '1 baño',
    size: '35m²',
    price: '$12,000',
    priceDetail: 'por noche en temporada alta',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const ApartmentCard = ({ apartment, onInquiryClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={apartment.image} 
          alt={apartment.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-black font-semibold py-1 px-3 rounded-full">
          {apartment.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{apartment.name}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-grow">{apartment.description}</p>
        
        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.capacity}</span>
          </div>
          <div className="flex items-center">
            <Bed className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.bedrooms}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.bathrooms}</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 text-primary mr-2" />
            <span>{apartment.size}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-lg font-bold text-primary">{apartment.price}</p>
            <p className="text-xs text-muted-foreground">{apartment.priceDetail}</p>
          </div>
          <Button 
            onClick={() => onInquiryClick(apartment.name)}
            className="bg-primary hover:bg-primary/90"
            size="sm"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Consultar
          </Button>
        </div>
      </div>
    </motion.div>
  );
};


const Apartments = ({ onInquiry }) => {
  return (
    <section id="departamentos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Departamentos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos diferentes opciones para que elijas la que mejor se adapte a tus necesidades. Todos nuestros departamentos están completamente equipados.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartmentsData.map((apartment, index) => (
            <ApartmentCard 
              key={apartment.id} 
              apartment={apartment} 
              onInquiryClick={onInquiry} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apartments;

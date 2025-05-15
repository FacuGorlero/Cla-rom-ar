
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Bus, Coffee } from 'lucide-react';

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestra <span className="text-primary">Ubicación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ubicados en una zona privilegiada de Villa Gesell, a pocos pasos de la playa y cerca de todos los servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Dirección
              </h3>
              <p className="text-muted-foreground mb-6">
                Avenida Buenos Aires 1234, entre Avenida 3 y Avenida 4<br />
                Villa Gesell, Buenos Aires, Argentina
              </p>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Distancias
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <span>A 200 metros de la playa (3 minutos caminando)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <Coffee className="h-3 w-3" />
                  </span>
                  <span>A 500 metros del centro comercial (7 minutos caminando)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2 mt-0.5">
                    <Bus className="h-3 w-3" />
                  </span>
                  <span>A 1 km de la terminal de ómnibus (15 minutos caminando)</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Coffee className="h-5 w-5 text-primary mr-2" />
                Servicios Cercanos
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Supermercados a 2 cuadras</li>
                <li>Restaurantes y bares a 3 cuadras</li>
                <li>Farmacia a 1 cuadra</li>
                <li>Cajero automático a 3 cuadras</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe 
              src="https://www.openstreetmap.org/export/embed.html?bbox=-57.04%2C-37.27%2C-56.96%2C-37.23&amp;layer=mapnik" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
              title="Mapa de ubicación"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

import { Heart, MapPin, Maximize2, Home as HomeIcon, Calendar, Package } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  size: number;
  type: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

interface PropertyCardProps {
  property: Property;
  style?: React.CSSProperties;
  onSwipe?: (direction: "left" | "right") => void;
}

export function PropertyCard({ property, style, onSwipe }: PropertyCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      style={style}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 150) {
          onSwipe?.(info.offset.x > 0 ? "right" : "left");
        }
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        setTimeout(() => setShowDetails(true), 400);
      }}
      className="absolute w-full h-full cursor-grab active:cursor-grabbing"
    >
      <div className="w-full h-full bg-[#8B5A3C] rounded-3xl overflow-hidden shadow-2xl flex">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: showDetails ? "50%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative flex-shrink-0"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-3xl mb-2">{property.title}</h2>
            <div className="flex items-center gap-2 text-white/90 mb-2">
              <MapPin size={18} />
              <span>{property.location}</span>
            </div>
            <p className="text-2xl">{property.price}</p>
          </div>
        </motion.div>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex-1 p-8 bg-[#F5E6D3] overflow-y-auto"
            >
              <h3 className="text-2xl text-[#1F150C] mb-6">Detaylar</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-[#412D15]">
                  <div className="w-10 h-10 rounded-full bg-[#8B5A3C] flex items-center justify-center">
                    <HomeIcon size={20} className="text-[#F5E6D3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#412D15]/70">Tip</p>
                    <p className="text-lg text-[#1F150C]">{property.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#412D15]">
                  <div className="w-10 h-10 rounded-full bg-[#8B5A3C] flex items-center justify-center">
                    <Maximize2 size={20} className="text-[#F5E6D3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#412D15]/70">Metrekare</p>
                    <p className="text-lg text-[#1F150C]">{property.size} m²</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#412D15]">
                  <div className="w-10 h-10 rounded-full bg-[#8B5A3C] flex items-center justify-center">
                    <Package size={20} className="text-[#F5E6D3]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#412D15]/70">Oda & Banyo</p>
                    <p className="text-lg text-[#1F150C]">{property.bedrooms} oda, {property.bathrooms} banyo</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#8B5A3C]/30 pt-6">
                <h4 className="text-lg text-[#1F150C] mb-3">Açıklama</h4>
                <p className="text-[#412D15] leading-relaxed">{property.description}</p>
              </div>

              <div className="mt-6 p-4 bg-[#8B5A3C]/20 rounded-xl">
                <div className="flex items-center gap-2 text-[#412D15] mb-2">
                  <Calendar size={18} />
                  <span className="text-sm">İlan Tarihi: 15 Mayıs 2026</span>
                </div>
                <p className="text-sm text-[#412D15]/70">İlan No: #{property.id}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

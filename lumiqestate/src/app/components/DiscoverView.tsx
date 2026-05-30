import { useState } from "react";
import { PropertyCard, Property } from "./PropertyCard";
import { X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Lüks Villa",
    price: "₺8.500.000",
    location: "Bodrum, Yalıkavak",
    size: 350,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "Deniz manzaralı, modern mimari ile tasarlanmış lüks villa. Havuz, bahçe ve özel plaj erişimi."
  },
  {
    id: "2",
    title: "Şık Şehir Dairesi",
    price: "₺3.200.000",
    location: "İstanbul, Beşiktaş",
    size: 180,
    type: "Daire",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    description: "Boğaz manzaralı, merkezi konumda, yeni yapılmış lüks rezidans dairesi."
  },
  {
    id: "3",
    title: "Minimalist Stüdyo",
    price: "₺1.850.000",
    location: "İstanbul, Kadıköy",
    size: 85,
    type: "Stüdyo",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    description: "Modern tasarım, akıllı ev sistemleri, yürüme mesafesinde tüm ihtiyaçlar."
  },
  {
    id: "4",
    title: "Deniz Kenarı Yazlık",
    price: "₺5.750.000",
    location: "Çeşme, Alaçatı",
    size: 220,
    type: "Yazlık",
    bedrooms: 4,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Özel plaja sıfır, havuzlu, geniş teraslı yazlık ev."
  },
  {
    id: "5",
    title: "Doğayla İç İçe Dağ Evi",
    price: "₺4.200.000",
    location: "Muğla, Datça",
    size: 280,
    type: "Bağ Evi",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    description: "Zeytinlik içinde, panoramik manzara, doğa ile iç içe huzurlu yaşam."
  }
];

interface DiscoverViewProps {
  onFavorite: (property: Property) => void;
}

export function DiscoverView({ onFavorite }: DiscoverViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [flashColor, setFlashColor] = useState<"red" | "green" | null>(null);

  const currentProperty = mockProperties[currentIndex];

  const handleSwipe = (direction: "left" | "right") => {
    setExitDirection(direction);
    setFlashColor(direction === "right" ? "green" : "red");

    if (direction === "right") {
      onFavorite(currentProperty);
    }

    setTimeout(() => {
      setFlashColor(null);
    }, 600);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProperties.length);
      setExitDirection(null);
    }, 700);
  };

  const handleButtonClick = (action: "dislike" | "like") => {
    handleSwipe(action === "like" ? "right" : "left");
  };

  if (!currentProperty) return null;

  return (
    <div className="flex items-center justify-center h-full px-8 relative">
      <AnimatePresence>
        {flashColor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
            className={`fixed inset-0 z-10 pointer-events-none ${
              flashColor === "red" ? "bg-red-600" : "bg-green-600"
            }`}
          />
        )}
      </AnimatePresence>

      <div className="relative w-full max-w-4xl h-[600px]">
        <AnimatePresence mode="wait">
          {!exitDirection && (
            <motion.div
              key={currentProperty.id}
              exit={{
                x: exitDirection === "right" ? 800 : -800,
                opacity: 0,
                rotate: exitDirection === "right" ? 20 : -20,
                transition: { duration: 0.3 }
              }}
            >
              <PropertyCard
                property={currentProperty}
                onSwipe={handleSwipe}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-8 z-20">
          <button
            onClick={() => handleButtonClick("dislike")}
            className="w-16 h-16 rounded-full bg-[#F5E6D3] border-2 border-[#8B5A3C] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <X size={32} className="text-[#c44536]" />
          </button>
          <button
            onClick={() => handleButtonClick("like")}
            className="w-16 h-16 rounded-full bg-[#412D15] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Heart size={32} className="text-[#F5E6D3]" fill="#F5E6D3" />
          </button>
        </div>
      </div>
    </div>
  );
}

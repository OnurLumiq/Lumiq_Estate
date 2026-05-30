import { useState } from "react";
import { Property } from "./PropertyCard";
import { Heart, MapPin, Maximize2, Eye, Trash2 } from "lucide-react";

interface ProfileViewProps {
  favorites: Property[];
  onRemoveFavorite: (id: string) => void;
}

export function ProfileView({ favorites, onRemoveFavorite }: ProfileViewProps) {
  const [user] = useState({
    name: "Kullanıcı",
    email: "kullanici@example.com",
    phone: "+90 555 123 4567"
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="bg-[#8B5A3C] rounded-3xl p-8 shadow-xl mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-[#1F150C] flex items-center justify-center">
            <span className="text-4xl text-[#F5E6D3]">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-3xl text-[#F5E6D3] mb-2">{user.name}</h2>
            <p className="text-[#F5E6D3]/80 mb-1">{user.email}</p>
            <p className="text-[#F5E6D3]/80">{user.phone}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#8B5A3C] rounded-3xl p-8 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="text-[#F5E6D3]" size={28} />
          <h3 className="text-2xl text-[#F5E6D3]">Favori İlanlarım</h3>
          <span className="bg-[#1F150C] text-[#F5E6D3] px-3 py-1 rounded-full text-sm">
            {favorites.length}
          </span>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16 text-[#F5E6D3]/60">
            <Heart size={64} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg text-[#F5E6D3]">Henüz favori ilan eklemediniz</p>
            <p className="text-sm mt-2 text-[#F5E6D3]/70">Keşfet sekmesinden beğendiğiniz ilanları ekleyin</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((property) => (
              <div key={property.id} className="bg-[#F5E6D3] rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative h-48">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors">
                      <Eye size={20} className="text-[#412D15]" />
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(property.id)}
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-[#c44536] hover:text-white transition-colors"
                    >
                      <Trash2 size={20} className="text-[#c44536] hover:text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg text-[#1F150C] mb-2">{property.title}</h4>
                  <div className="flex items-center gap-2 text-[#412D15] text-sm mb-2">
                    <MapPin size={14} />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[#412D15] text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Maximize2 size={14} />
                      <span>{property.size} m²</span>
                    </div>
                    <span>{property.bedrooms} oda</span>
                    <span>{property.bathrooms} banyo</span>
                  </div>
                  <p className="text-xl text-[#1F150C]">{property.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

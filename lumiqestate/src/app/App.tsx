import { useState, useEffect } from "react";
import { DynamicIslandNav } from "./components/DynamicIslandNav";
import { DiscoverView } from "./components/DiscoverView";
import { ProfileView } from "./components/ProfileView";
import { CreateListingView } from "./components/CreateListingView";
import { AuthModal } from "./components/AuthModal";
import { Property } from "./components/PropertyCard";
import { LogIn } from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState<"profile" | "discover" | "create">("discover");
  const [favorites, setFavorites] = useState<Property[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        setShowAuthModal(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  const handleFavorite = (property: Property) => {
    if (!favorites.find(fav => fav.id === property.id)) {
      setFavorites([...favorites, property]);
    }
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    console.log("Kullanıcı giriş yaptı:", email);
  };

  return (
    <div className="size-full bg-[#6B4423] relative overflow-hidden">
      {!isLoggedIn && (
        <button
          onClick={() => setShowAuthModal(true)}
          className="absolute top-6 right-6 z-40 flex items-center gap-2 bg-[#8B5A3C] text-[#F5E6D3] px-6 py-3 rounded-full shadow-lg hover:bg-[#1F150C] transition-colors"
        >
          <LogIn size={20} />
          <span>Giriş Yap</span>
        </button>
      )}

      <DynamicIslandNav activeView={activeView} onViewChange={setActiveView} />

      <div className="h-full pt-32 pb-8 overflow-y-auto">
        {activeView === "discover" && <DiscoverView onFavorite={handleFavorite} />}
        {activeView === "profile" && (
          <ProfileView favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
        )}
        {activeView === "create" && <CreateListingView />}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
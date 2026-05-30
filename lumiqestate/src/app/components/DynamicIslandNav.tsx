import { User, Home, PlusCircle } from "lucide-react";

interface DynamicIslandNavProps {
  activeView: "profile" | "discover" | "create";
  onViewChange: (view: "profile" | "discover" | "create") => void;
}

export function DynamicIslandNav({ activeView, onViewChange }: DynamicIslandNavProps) {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#1F150C] rounded-[2.5rem] px-6 py-3 flex items-center gap-8 shadow-2xl backdrop-blur-xl border border-[#8B5A3C]">
        <button
          onClick={() => onViewChange("profile")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "profile"
              ? "bg-[#8B5A3C] text-[#F5E6D3]"
              : "text-[#F5E6D3]/60 hover:text-[#F5E6D3]"
          }`}
        >
          <User size={20} />
          <span className="text-sm">Profil</span>
        </button>

        <button
          onClick={() => onViewChange("discover")}
          className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
            activeView === "discover"
              ? "bg-[#8B5A3C] text-[#F5E6D3] scale-110"
              : "text-[#F5E6D3]/60 hover:text-[#F5E6D3]"
          }`}
        >
          <Home size={24} />
          <span className="text-base">Keşfet</span>
        </button>

        <button
          onClick={() => onViewChange("create")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            activeView === "create"
              ? "bg-[#8B5A3C] text-[#F5E6D3]"
              : "text-[#F5E6D3]/60 hover:text-[#F5E6D3]"
          }`}
        >
          <PlusCircle size={20} />
          <span className="text-sm">İlan Ekle</span>
        </button>
      </div>
    </div>
  );
}

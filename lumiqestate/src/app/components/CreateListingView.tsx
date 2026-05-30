import { useState } from "react";
import { Home, MapPin, Maximize2, DollarSign, Image, FileText } from "lucide-react";

export function CreateListingView() {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    location: "",
    size: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
    color: ""
  });

  const propertyTypes = ["Villa", "Daire", "Stüdyo", "Yazlık", "Bağ Evi", "Dubleks"];
  const colors = ["Beyaz", "Bej", "Gri", "Mavi", "Yeşil", "Diğer"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("İlan oluşturuldu:", formData);
    alert("İlan başarıyla oluşturuldu!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      <div className="bg-[#8B5A3C] rounded-3xl p-8 shadow-xl">
        <h2 className="text-3xl text-[#F5E6D3] mb-8">Yeni İlan Ekle</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <Home size={20} className="text-[#F5E6D3]" />
              İlan Başlığı
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3] text-[#F5E6D3]"
              placeholder="Örn: Modern Lüks Villa"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <Home size={20} className="text-[#F5E6D3]" />
                Ev Tipi
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
                required
              >
                <option value="">Seçiniz</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <MapPin size={20} className="text-[#F5E6D3]" />
                Konum
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
                placeholder="Şehir, İlçe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <Maximize2 size={20} className="text-[#F5E6D3]" />
                Metrekare
              </label>
              <input
                type="number"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
                placeholder="m²"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <Home size={20} className="text-[#F5E6D3]" />
                Oda Sayısı
              </label>
              <input
                type="number"
                value={formData.bedrooms}
                onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
                placeholder="Oda"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <Home size={20} className="text-[#F5E6D3]" />
                Banyo Sayısı
              </label>
              <input
                type="number"
                value={formData.bathrooms}
                onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
                placeholder="Banyo"
                required
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <span className="w-5 h-5 rounded-full bg-[#412D15]"></span>
              Renk
            </label>
            <select
              value={formData.color}
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
              required
            >
              <option value="">Seçiniz</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <DollarSign size={20} className="text-[#F5E6D3]" />
              Fiyat (₺)
            </label>
            <input
              type="text"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3]"
              placeholder="₺0"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <FileText size={20} className="text-[#F5E6D3]" />
              Açıklama
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3] resize-none"
              rows={4}
              placeholder="İlan detaylarını buraya yazınız..."
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <Image size={20} className="text-[#F5E6D3]" />
              Fotoğraflar
            </label>
            <div className="border-2 border-dashed border-[#F5E6D3]/30 rounded-xl p-8 text-center hover:border-[#F5E6D3] transition-colors cursor-pointer bg-[#F5E6D3]">
              <Image size={48} className="mx-auto mb-3 text-[#F5E6D3]/50" />
              <p className="text-[#F5E6D3]">Fotoğraf yüklemek için tıklayın</p>
              <p className="text-sm text-[#F5E6D3]/60 mt-1">veya sürükleyip bırakın</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F150C] text-[#F5E6D3] py-4 rounded-xl hover:bg-[#412D15] transition-colors shadow-lg"
          >
            İlanı Yayınla
          </button>
        </form>
      </div>
    </div>
  );
}

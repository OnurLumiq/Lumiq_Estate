import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#8B5A3C] rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F5E6D3] hover:text-[#1F150C]"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl text-[#F5E6D3] mb-6 text-center">
          {isLogin ? "Giriş Yap" : "Kayıt Ol"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
                <User size={18} className="text-[#F5E6D3]" />
                İsim Soyisim
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3] text-[#1F150C]"
                placeholder="Adınız"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <Mail size={18} className="text-[#F5E6D3]" />
              E-posta
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3] text-[#1F150C]"
              placeholder="ornek@email.com"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#F5E6D3] mb-2">
              <Lock size={18} className="text-[#F5E6D3]" />
              Şifre
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E6D3]/20 focus:border-[#F5E6D3] focus:outline-none transition-colors bg-[#F5E6D3] text-[#1F150C]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F150C] text-[#F5E6D3] py-3 rounded-xl hover:bg-[#412D15] transition-colors"
          >
            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#F5E6D3] hover:text-[#1F150C] underline"
          >
            {isLogin
              ? "Hesabınız yok mu? Kayıt olun"
              : "Zaten hesabınız var mı? Giriş yapın"}
          </button>
        </div>
      </div>
    </div>
  );
}

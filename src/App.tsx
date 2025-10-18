import { useState } from 'react';
import {
  Wine, Droplet, Zap, Droplets, Martini, GlassWater, Beer, Flame,
  MapPin, MessageCircle, Clock, ChevronDown, Phone, ExternalLink
} from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

function App() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  const categories: Category[] = [
    // (suas categorias continuam exatamente iguais)
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-black to-neutral-950 border-b border-amber-600/30 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col items-center">
          <img
            src="https://raw.githubusercontent.com/juliocamposmachado/Cardapio-Adega-24-horas/refs/heads/main/logo%20radio%20tatuape%20fm.png"
            alt="Adega Rádio Tatuapé FM Express"
            className="h-14 md:h-16 object-contain mb-3"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
            Adega Rádio Tatuapé FM Express
          </h1>
          <p className="text-amber-500 text-sm md:text-base font-semibold">Cardápio Oficial</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 backdrop-blur-sm hover:border-amber-600/50 transition-all duration-300 shadow-lg"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-5 md:px-7 py-5 flex items-center justify-between bg-gradient-to-r from-neutral-900 to-neutral-950 hover:from-neutral-800 hover:to-neutral-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-amber-500 bg-amber-500/10 p-2 rounded-lg">{category.icon}</div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                  <span className="text-xs text-neutral-500 hidden md:inline bg-neutral-800 px-2 py-1 rounded-full">
                    {category.items.length} {category.items.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-amber-500 transform transition-transform duration-300 ${
                    openCategory === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Category Items */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openCategory === index ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-7 py-5 space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="pb-4 border-b border-neutral-800 last:border-0 hover:bg-neutral-900/40 p-3 rounded-lg transition-all duration-200"
                    >
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-white font-semibold text-base md:text-lg flex-1">
                          {item.name}
                        </h3>
                        <span className="text-amber-500 font-bold text-lg md:text-xl whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-black via-neutral-950 to-transparent border-t border-amber-600/30 backdrop-blur-lg shadow-inner mt-12">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center space-y-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-amber-500" />
            <p className="text-amber-500 font-semibold">Entregas 24h – Rádio Tatuapé FM Express</p>
            <p className="text-neutral-400 text-sm">Peça pelo iFood & 99Food</p>
          </div>

          {/* WhatsApp Contacts */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-neutral-300 text-sm">
              <MessageCircle className="w-4 h-4 text-amber-500" />
              <span className="font-semibold">WhatsApp para pedidos:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <a
                href="https://wa.me/5511970603441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>(11) 97060-3441</span>
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="https://wa.me/5511992946628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>(11) 99294-6628</span>
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href="tel:+551136808030"
                className="flex items-center gap-1 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>(11) 3680-8030</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-neutral-500 text-xs pt-1">
            <Clock className="w-3 h-3" />
            <span>Funcionamento 24 horas por dia</span>
          </div>

          <div className="border-t border-neutral-800 pt-3 mt-3">
            <p className="text-neutral-600 text-xs">
              Desenvolvido por <span className="text-neutral-400 font-semibold">Julio Campos Machado</span>
            </p>
            <a
              href="https://likelook.wixsite.com/solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-amber-500 transition-colors text-xs"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Like Look Solutions</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

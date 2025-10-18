import { useState } from 'react';
import { Wine, Droplet, Zap, Droplets, Martini, GlassWater, Beer, Flame, MapPin, MessageCircle, Clock, ChevronDown, Phone, ExternalLink } from 'lucide-react';

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
    {
      title: 'Vinhos',
      icon: <Wine className="w-5 h-5" />,
      items: [
        { name: 'Frisante Italiano Tinto Lambrusco Villa Giada Amabile', description: 'Vinho frisante italiano de sabor suave e adocicado. 750ml', price: 'R$ 72,00' },
        { name: 'Santa Carolina Cabernet Sauvignon Merlot', description: 'Vinho tinto chileno encorpado com notas de frutas vermelhas. 750ml', price: 'R$ 60,00' },
        { name: 'Vinho Chileno Branco Reservado Chardonnay Santa Carolina', description: 'Branco elegante com aroma de frutas tropicais. 750ml', price: 'R$ 60,00' },
        { name: 'Vinho Chileno Tinto Reservado Malbec Santa Carolina', description: 'Tinto intenso com taninos macios e final prolongado. 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Pata Negra Oro Tempranillo', description: 'Vinho espanhol premium com notas de carvalho. 750ml', price: 'R$ 84,90' },
        { name: 'Vinho Reservado Cabernet Sauvignon Santa Carolina', description: 'Clássico chileno com estrutura firme e elegante. 750ml', price: 'R$ 60,00' },
        { name: 'Vinho Reservado Shiraz Santa Carolina', description: 'Tinto robusto com aromas de especiarias. 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Sul-Africano Rosé Nederburg', description: 'Rosé refrescante com notas florais e frutadas. 750ml', price: 'R$ 123,50' },
        { name: 'Vinho Tinto Chileno Reservado Merlot Santa Carolina', description: 'Merlot macio e aveludado, ideal para o dia a dia. 750ml', price: 'R$ 76,50' },
        { name: 'Vinho Tinto Suave Olaria', description: 'Tinto nacional suave e equilibrado. 750ml', price: 'R$ 74,00' },
        { name: 'Vinho Tinto Suave Reservado Santa Carolina', description: 'Opção leve e agradável para iniciantes. 750ml', price: 'R$ 51,00' },
        { name: 'Vinho Sul-Africano Tinto 1791 Pinotage Nederburg', description: 'Variedade exclusiva da África do Sul, rico e complexo. 750ml', price: 'R$ 115,50' },
        { name: 'Vinho Chileno Branco Reservado Sauvignon Blanc Santa Carolina', description: 'Branco fresco e aromático com acidez vibrante. 750ml', price: 'R$ 60,00' },
      ]
    },
    {
      title: 'Refrigerantes',
      icon: <Droplet className="w-5 h-5" />,
      items: [
        { name: 'Coca-Cola Original', description: 'O clássico refrigerante de cola. 200ml', price: 'R$ 3,00' },
        { name: 'Drink Pronto Jack Daniel\'s com Coca-Cola', description: 'Combinação premium pronta para beber. 350ml', price: 'R$ 21,00' },
        { name: 'Fanta Laranja', description: 'Refrigerante de laranja refrescante. 2L', price: 'R$ 17,00' },
        { name: 'Fanta Uva', description: 'Sabor intenso de uva para toda família. 2L', price: 'R$ 18,50' },
        { name: 'Coca-Cola PET', description: 'A original em embalagem econômica. 2L', price: 'R$ 16,00' },
        { name: 'Guaraná Antarctica', description: 'Guaraná genuinamente brasileiro. 2L', price: 'R$ 18,50' },
      ]
    },
    {
      title: 'Energéticos',
      icon: <Zap className="w-5 h-5" />,
      items: [
        { name: 'Baly', description: 'Energia e sabor em lata. 473ml', price: 'R$ 11,00' },
        { name: 'Furioso', description: 'Energia rápida e intensa. 250ml', price: 'R$ 4,00' },
        { name: 'Red Bull', description: 'O energético número 1 do mundo. 250ml', price: 'R$ 17,00' },
        { name: 'Baly Tradicional', description: 'Versão família do energético. 2L', price: 'R$ 25,00' },
        { name: 'Baly Melancia', description: 'Sabor refrescante de melancia. 2L', price: 'R$ 21,00' },
        { name: 'Drink Baly Frutas Tropicais', description: 'Mix exótico de frutas tropicais.', price: 'R$ 10,00' },
        { name: 'Baly Melancia', description: 'Lata individual sabor melancia. 473ml', price: 'R$ 10,00' },
      ]
    },
    {
      title: 'Águas',
      icon: <Droplets className="w-5 h-5" />,
      items: [
        { name: 'Crystal com gás', description: 'Água mineral gaseificada. 500ml', price: 'R$ 5,00' },
        { name: 'São Lourenço', description: 'Água mineral natural pura. 1,26L', price: 'R$ 10,90' },
        { name: 'Voss', description: 'Água premium norueguesa em garrafa icônica. 375ml', price: 'R$ 48,00' },
        { name: 'Água de Coco Quadrado', description: 'Água de coco 100% natural. 200ml', price: 'R$ 5,00' },
        { name: 'Kero Coco', description: 'Hidratação natural direto do coco. 200ml', price: 'R$ 5,00' },
      ]
    },
    {
      title: 'Destilados',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Conhaque Dreher', description: 'Conhaque brasileiro tradicional. 900ml', price: 'R$ 42,50' },
        { name: 'Tequila Tequiloka Silver', description: 'Tequila mexicana prata para drinks. 1L', price: 'R$ 41,50' },
      ]
    },
    {
      title: 'Sucos',
      icon: <GlassWater className="w-5 h-5" />,
      items: [
        { name: 'Suco de Uva Integral Flora', description: 'Suco 100% natural sem adição de açúcar. 300ml', price: 'R$ 15,00' },
      ]
    },
    {
      title: 'Cachaça',
      icon: <Flame className="w-5 h-5" />,
      items: [
        { name: 'Velho Barreiro', description: 'Cachaça tradicional brasileira de qualidade. 910ml', price: 'R$ 28,00' },
      ]
    },
    {
      title: 'Gin',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Gin Apogee', description: 'Gin nacional premium com botânicos selecionados. 1L', price: 'R$ 87,50' },
        { name: 'Gin Apogee Negroni', description: 'Versão especial para o clássico coquetel. 1L', price: 'R$ 87,50' },
        { name: 'Gin Eternity', description: 'Gin suave e aromático. 900ml', price: 'R$ 59,50' },
        { name: 'Gin Rocks', description: 'Gin intenso com caráter único. 1L', price: 'R$ 100,50' },
        { name: 'Gin Seagers', description: 'Gin importado de qualidade comprovada. 980ml', price: 'R$ 93,50' },
        { name: 'Combo Gin Eternity', description: 'Kit especial com gin e acompanhamentos.', price: 'R$ 72,00' },
        { name: 'Gin Intencion', description: 'Opção acessível para drinks do dia a dia. 900ml', price: 'R$ 27,00' },
      ]
    },
    {
      title: 'Cervejas',
      icon: <Beer className="w-5 h-5" />,
      items: [
        { name: 'Becks', description: 'Cerveja alemã premium de sabor marcante. 350ml', price: 'R$ 13,50' },
        { name: 'Brahma Duplo Malte', description: 'Encorpada com 2x mais malte. 269ml', price: 'R$ 5,50' },
        { name: 'Budweiser', description: 'Cerveja americana lager clássica. 269ml', price: 'R$ 8,00' },
        { name: 'Estrella Galicia', description: 'Cerveja espanhola de tradição. 269ml', price: 'R$ 6,50' },
        { name: 'Heineken', description: 'Cerveja holandesa mundialmente famosa. 269ml', price: 'R$ 9,00' },
        { name: 'Império', description: 'Cerveja puro malte brasileira. 269ml', price: 'R$ 5,00' },
        { name: 'Red Stripe', description: 'Cerveja jamaicana leve e refrescante. 330ml', price: 'R$ 14,50' },
        { name: 'Amstel', description: 'Lager holandesa equilibrada. 269ml', price: 'R$ 5,50' },
        { name: 'Becks Long Neck', description: 'Versão long neck da cerveja alemã. 330ml', price: 'R$ 13,50' },
        { name: 'Skol', description: 'A cerveja mais popular do Brasil. 269ml', price: 'R$ 5,30' },
        { name: 'Spaten', description: 'Cerveja alemã puro malte premium. 350ml', price: 'R$ 9,00' },
        { name: 'Kit Paulaner Weissbier e Dunkel', description: 'Combo com cervejas de trigo e escura. 500ml', price: 'R$ 148,50' },
        { name: 'Antarctica', description: 'Cerveja pilsen brasileira tradicional. 350ml', price: 'R$ 6,50' },
        { name: 'Stella Artois', description: 'Cerveja belga premium refinada. 269ml', price: 'R$ 7,00' },
        { name: 'Spaten Long Neck', description: 'Versão long neck da alemã puro malte. 269ml', price: 'R$ 7,50' },
      ]
    },
    {
      title: 'Vodkas',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Orloff', description: 'Vodka nacional de alta qualidade. 1,75L', price: 'R$ 114,00' },
        { name: 'Smirnoff', description: 'Vodka premium internacional. 998ml', price: 'R$ 82,50' },
        { name: 'Askov', description: 'Vodka brasileira tradicional. 900ml', price: 'R$ 24,90' },
        { name: 'Eternity', description: 'Vodka nacional pura e suave. 950ml', price: 'R$ 27,00' },
      ]
    },
    {
      title: 'Whiskies',
      icon: <Martini className="w-5 h-5" />,
      items: [
        { name: 'Passport Honey', description: 'Whisky escocês com toque de mel. 670ml', price: 'R$ 127,50' },
        { name: 'Bell\'s', description: 'Blended scotch whisky de tradição. 700ml', price: 'R$ 104,00' },
        { name: 'Black & White', description: 'Scotch whisky equilibrado e macio. 700ml', price: 'R$ 137,90' },
        { name: 'Passport Scotch', description: 'Whisky escocês autêntico. 1L', price: 'R$ 116,50' },
        { name: 'Ballantine\'s Finest', description: 'Blended scotch premium e refinado. 750ml', price: 'R$ 164,50' },
        { name: 'White Horse', description: 'Scotch whisky de caráter marcante. 1L', price: 'R$ 146,00' },
        { name: 'White Horse', description: 'Versão menor do clássico escocês. 500ml', price: 'R$ 82,50' },
        { name: 'Natu Nobilis', description: 'Whisky brasileiro de qualidade. 1L', price: 'R$ 127,50' },
        { name: 'Old Eight', description: 'Whisky nacional encorpado. 900ml', price: 'R$ 58,90' },
      ]
    },
  ];

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-black to-neutral-950 border-b border-amber-600/30 sticky top-0 z-50 backdrop-blur-md shadow-xl">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <img
              src="https://raw.githubusercontent.com/juliocamposmachado/Cardapio-Adega-24-horas/refs/heads/main/logo%20radio%20tatuape%20fm.png"
              alt="Adega Rádio Tatuapé FM Express"
              className="h-19 md:h-23 object-contain"
            />
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold text-white mb-1">
                Adega Rádio Tatuapé FM Express
              </h1>
              <p className="text-amber-500 text-sm md:text-base font-semibold">Cardápio Oficial</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 pb-40">
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
      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-neutral-950 to-transparent border-t border-amber-600/30 backdrop-blur-lg shadow-2xl">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="space-y-3 text-center">
            {/* Delivery Info */}
            <div className="flex items-center justify-center gap-2 text-amber-500 text-sm md:text-base font-bold">
              <MapPin className="w-5 h-5" />
              <span>Entregas 24h – Rádio Tatuapé FM Express</span>
            </div>
            <p className="text-neutral-400 text-xs md:text-sm font-medium">
              Peça pelo iFood & 99Food
            </p>

            {/* WhatsApp Contacts */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center gap-2 text-neutral-300 text-xs md:text-sm">
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

            {/* Hours */}
            <div className="flex items-center justify-center gap-2 text-neutral-500 text-xs pt-1">
              <Clock className="w-3 h-3" />
              <span>Funcionamento 24 horas por dia</span>
            </div>

            {/* Developer Credit */}
            <div className="border-t border-neutral-800 pt-3 mt-3 space-y-1">
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
        </div>
      </footer>
    </div>
  );
}

export default App;

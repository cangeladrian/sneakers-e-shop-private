"use client";

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Truck, RotateCcw, Gem } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../../store';

// 1. DEFINÍCIA TYPU (Musí presne sedieť s dátami nižšie)
interface Produkt {
  nazov: string;
  cena: string;
  foto: string;
  popis: string;
  opis: string;
  popis2: string;
  galeria: string[];
  plagat: string;
}

// 2. DÁTA PRODUKTOV (Pridaná galeria a opravený opis)
const dataTopanok: { [key: string]: Produkt } = {
  "pro2": {
    nazov: "Nike Air Zoom Alphafly Next% „MOVES 3 Edition“",
    cena: "380.00 €",
    foto: "/airzoom1.png",
    popis: "Budúcnosť rýchlosti",
    popis2: "Zvršok: 100% Textil (AtomKnit – technické syntetické vlákna)Vnútro / Stielka: 100% Textil (Priedušná sieťovina)Medzipodošva: 90% ZoomX (Pebaxová pena), 10% Karbónové vlákno (Flyplate)Podrážka: 100% Odľahčená guma (Strategicky umiestnená v bodoch najväčšieho trenia) Hmotnosť: cca 210g (extrémna ľahkosť)Drop: 4 mm (výškový rozdiel medzi pätou a špičkou pre prirodzený nášľap)Určenie: Cestný beh, maratón, pretekyFarba: White / Cream / Black",
    opis: "Nike Air Zoom Alphafly Next% je výsledkom rokov výskumu a spolupráce s najrýchlejšími bežcami planéty (ako Eliud Kipchoge). Tento model je navrhnutý tak, aby maximalizoval návrat energie a minimalizoval únavu svalov pri každom kroku. Ak hľadáte to najlepšie na beh, čo súčasná technológia ponúka, toto je vaša odpoveď.",
    galeria: ["/airzoom2.png",  "/airzoom4.png"], // Sem daj cesty k detailom
    plagat: "/run.png"
  },
  "dinamic": {
    nazov: "Speed Runner X",
    cena: "159.00 €",
    foto: "/dinamic1.png",
    popis: "Keď sa umenie stretáva s ikonickou siluetou: Dekonštruovaná klasika",
    popis2: "Zvršok: 100% Prémiová hovädzia koža (Smooth Leather)Vnútro / Podšívka: 80% Textil (Bavlna), 20% KožaPodrážka: 100% Vulkanizovaná guma (Hand-molded Rubber)Šnúrky: 100% Bavlna (Chunky Laces) Hmotnosť: cca 600g (v závislosti od veľkosti) Profil: Nízky (Low-top) Sezóna: Celoročná (vďaka koženému prevedeniu)",
    opis: "Japonský avantgardný dizajnér Mihara Yasuhiro vzal najznámejšiu siluetu na svete a podrobil ju svojej signature dekonštrukcii. Výsledkom je topánka, ktorá na prvý pohľad pôsobí familiárne, no pri bližšom skúmaní odhaľuje svoju divokú, umeleckú dušu.   ",
    galeria: ["/dinamic2.png", "/dinamic3.png", "/dinamic4.png"],
    plagat: "/pro2-plagat.jpg"
  },
  "u3": {
    nazov: "U3 Urban Edition",
    cena: "159.00 €",
    foto: "/dinamic..png",
    popis: "Minimalistický look s maximálnou odolnosťou.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Mestská klasika v novom prevedení. Odolná voči každému počasiu.",
    galeria: ["/dinamic..png", "/dinamic..png", "/dinamic..png"],
    plagat: "/pro2-plagat.jpg"
  },
  "retrolow": {
    nazov: "Retro Low Classic",
    cena: "159.00 €",
    foto: "/retrolow..png",
    popis: "Návrat ku koreňom v modernom prevedení.",
    popis2: "Návrat ku koreňom v modernom prevedení.",
    opis: "Inšpirované estetikou 90-tych rokov, vylepšené o moderné technológie spracovania.",
    galeria: ["/retrolow..png", "/retrolow..png", "/retrolow..png"],
    plagat: "/pro2-plagat.jpg"
  }
  // Ak pridáš ďalšie ID, nezabudni im doplniť galériu a opis!
};

export default function ProduktStranka() {
  const params = useParams();
  const id = params.id as string;

  // Vyhľadanie produktu alebo default na pro2
  const produkt: Produkt = dataTopanok[id] || dataTopanok["pro2"];
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ['38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];


const addItem = useCart((state) => state.addItem);

const handleAddToCart = () => {
  if (!selectedSize) {
    alert("Prosím, vyber si veľkosť!");
    return;
  }

  addItem({
    id: id,
    nazov: produkt.nazov,
    cena: produkt.cena,
    foto: produkt.foto,
    size: selectedSize
  });
};


  return (
    <main className="min-h-screen bg-white pb-20 pt-20">
      
      {/* --- 1. HERO SEKCIÁ (HLAVNÁ FOTKA) --- */}
      <section className="relative w-full md:h-[60vh] h-[40vh]  flex flex-col items-center justify-center overflow-hidden ">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl aspect-video"
        >
          <Image 
            src={produkt.foto} 
            alt={produkt.nazov} 
            fill 
            className="object-contain p-10" 
            priority 
          />
        </motion.div>
      </section>

      {/* --- 2. INFO SEKCIÁ (NÁZOV, CENA, VEĽKOSTI) --- */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-20">
         <div>
            <h1 className="text-1xl md:text-2xl font-semibold  tracking-tighter mb-4">{produkt.nazov}</h1>
            <p className="text-2xl md:text-4xl font-light text-zinc-900">{produkt.cena}</p>
          </div>
          
         <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <h3 className="text-xs font-semibold  tracking-widest">Vybrať veľkosť (EU)</h3>
              <span className="text-[10px] border-b border-black cursor-help  font-bold">Tabuľka veľkosti</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`md:py-5 py-3 text-sm font-normal transition-all border ${
                    selectedSize === size 
                    ? 'bg-black text-white border-black' 
                    : 'border-zinc-200 hover:border-black text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white md:py-6 py-3 font-bold uppercase tracking-[0.2em] hover:invert transition-all active:scale-[0.98]">
            Pridať do košíka
          </button>

          {/* DOPLNKOVÉ INFO */}
          <div className="grid grid-cols-3 gap-8 md:pt-10 pt-5 text-center text-[10px] uppercase font-semibold tracking-widest text-black">
            <div>✓ Doprava zadarmo</div>
            <div>✓ Doručenie do 48 hodín</div>
             <div>✓ Vrátenie tovaru do 30 dní</div>
          </div>
        </div>
        {/* TEXTY */}
        <div className="space-y-10">
         
          
          <div className="space-y-4">
            <p className="text-black text-center md:text-left leading-relaxed text-lg">{produkt.popis}</p>
            
          </div>

          <div className="pt-10">
            <br />
            <h3 className="text-xs font-semibold  text-black">O produkte:</h3>
             <p className="text-black text-sm leading-relaxed">{produkt.opis}</p>
          </div>

          <div className="pt-10 ">
             <p className="text-black text-sm leading-relaxed">{produkt.popis2}</p>
          </div>
          
        </div>

        {/* VÝBER VEĽKOSTI A NÁKUP */}
       
      </div>

      
        
       

      {/* --- 3. GALÉRIA (SLIDER) --- */}
      <section className="max-w-7xl mx-auto px-6 md:py-20 py-10 mt-10 border-t border-black">
        
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
          {produkt.galeria.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="min-w-[65vw] md:min-w-[30vw] aspect-[4/5] relative bg-zinc-50 snap-center"
            >
              <Image 
                src={img} 
                alt={`${produkt.nazov} detail ${index + 1}`}
                fill
                className="object-contain p-8 md:p-16"
              />
            </motion.div>
          ))}
        </div>
      </section>


<section className="py-36">
  <div className="max-w-[1400px] mx-auto px-4 md:px-10">
    {/* PRODUKTOVÝ GRID / SCROLL */}
       <div className='flex items-start justify-center'>
          <h2 className="text-[24px] md:text-[32px] font-normal  uppercase leading-tight ">
            Podobné kúsky
          </h2>
          </div>
    <div className="
      flex md:grid 
      md:grid-cols-3 lg:grid-cols-3 
      gap-8 md:gap-12 
      overflow-x-auto md:overflow-visible 
      snap-x snap-mandatory 
      no-scrollbar 
      pb-10
      -mx-4 px-4 md:mx-0 md:px-0 
    ">
      {/* Prvá topánka */}
      <div className="flex-shrink-0 w-[85%] md:w-full snap-center group cursor-pointer">
        <div className=" p-6 mb-4 overflow-hidden">
          <Image 
            src="/urbanlow.png" 
            width={400} 
            height={300} 
            alt="Retro Dinamic" 
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
        <h3 className="font-semibold uppercase text-[16px] text-center text-sm tracking-tight">Retro Dinamic</h3>
 
      </div>

      {/* Druhá topánka */}
      <div className="flex-shrink-0 w-[85%] md:w-full snap-center group cursor-pointer">
        <div className=" p-6 mb-4 overflow-hidden">
          <Image 
            src="/ecostreet.png" 
            width={400} 
            height={300} 
            alt="Eco Street" 
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
        </div>
        <h3 className="font-semibold uppercase text-[16px] text-center text-sm tracking-tight">Eco Street</h3>
   
      </div>

      {/* Tretia topánka */}
      <div className="flex-shrink-0 w-[85%] md:w-full snap-center group cursor-pointer">
        <div className="p-6 mb-4 overflow-hidden">
          <Image 
            src="/skatepro..png" 
            width={400} 
            height={300} 
            alt="Skate Pro" 
            className="group-hover:scale-110 transition-transform duration-500 ease-in-out" 
          />
        </div>
        <h3 className="font-semibold uppercase text-[16px] text-center text-sm tracking-tight">Skate Pro</h3>
      
      </div>
    </div>
  </div>
</section>


    <section className="w-full flex justify-center justify-center
           py-10">
  {/* TENTO DIV DRŽÍ VŠETKY TRI POLOŽKY VEDĽA SEBA */}
  <div className=" md:flex-row  md:gap-80 flex flex-col md:grid md:grid-cols-3  gap-10 text-center   text-[12px]   font-normal ">
    
    {/* 1. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-center">
      <Truck size={32} strokeWidth={1.5} />
      <span>Doprava zadarmo pre <br /> všetky objednávky.</span>
    </div>

    {/* 2. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-justify">
      <RotateCcw size={32} strokeWidth={1.5} />
      <span>30 dní na vrátenie tovaru</span>
    </div>

    {/* 3. POLOŽKA */}
    <div className="flex flex-col items-center gap-4 text-center">
      <Gem size={32} strokeWidth={1.5} />
      <span>Prémiové materiály a <br /> exkluzívne modely</span>
    </div>

  </div>

  <br />
</section>


      <footer className="bg-white text-black py-16 px-6 md:px-24 border-t border-gray-100">
  <div className="max-w-7xl mx-auto space-y-16">
    
    

    {/* 2. SEKČIA: LOGÁ PLATBY A DOPRAVY */}
    <div className="flex flex-col items-center py-10 space-y-8">
      <div className="text-center">
        <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-4">Spôsoby platby</p>
        <div className="flex flex-wrap justify-center gap-6 grayscale opacity-100">
          <img src="/platba1.png" className="h-6" alt="Platba" />
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-gray-400 uppercase text-center tracking-widest text-[10px] mb-4">Doprava</p>
        <div className="flex flex-wrap justify-center gap-8 grayscale opacity-100">
          <img src="/doprava.png" className="h-8" alt="Doprava" />
         
        </div>
      </div>
    </div>

    {/* 3. SEKČIA: HLAVNÉ MENU (Grid 4 stĺpce) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12">
      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Pomoc</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer transition">Sledovanie objednávky</li>
          <li className="hover:text-black cursor-pointer transition">Vrátenie a výmena</li>
          <li className="hover:text-black cursor-pointer transition">Tabuľky veľkostí</li>
          <li className="hover:text-black cursor-pointer transition">FAQ</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Kategórie</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-black cursor-pointer transition">Nové kúsky</li>
          <li className="hover:text-black cursor-pointer transition">Ženy</li>
          <li className="hover:text-black cursor-pointer transition">Muži</li>
          <li className="hover:text-black cursor-pointer transition">Blog</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Kontakt</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="font-medium">+421 980 000 222</li>
          <li>info@moves.sk</li>
          <li className="text-xs text-gray-400">Pon - Pia: 08:00 - 18:00</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold uppercase tracking-widest text-xs">Sociálne siete</h4>
        <div className="flex gap-4">
           {/* Tu použi ikony napr. z Lucide-react alebo klasické SVG */}
           <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">IG</div>
           <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer">FB</div>
        </div>
      </div>
    </div>

    {/* SPODNÁ LIŠTA: COPYRIGHT */}
    <div className="border-t border-gray-100 pt-8 flex flex-col w-full  md:flex-row justify-between items-center text-[10px] text-black-400 uppercase tracking-widest">
      <p>© 2026 MOVES Všetky práva vyhradené.</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <span className="hover:text-black cursor-pointer">Obchodné podmienky</span>
        <span className="hover:text-black cursor-pointer">Ochrana údajov</span>
        <span className='hoover:text-black cursor-pointer'>MOVES: SK  CZ  IT  HR  AT  FR  UK</span>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}
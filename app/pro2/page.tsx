"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const vsetkyProdukty = [
  { id: "pro2", nazov: "Urban Classic PRO2", cena: "350.00 €", foto: "/pro2.png", tag: "Bestseller" },
  { id: "dinamic", nazov: "Speed Runner X", cena: "159.00 €", foto: "/dinamic..png", tag: "Novinka" },
  { id: "u3", nazov: "U3 Urban Edition", cena: "159.00 €", foto: "/skatepro..png", tag: "" },
  { id: "retrolow", nazov: "Retro Low Classic", cena: "159.00 €", foto: "/u3..png", tag: "Eco" },
  { id: "retrolow", nazov: "Retro Low Classic", cena: "159.00 €", foto: "/retrohigh.png", tag: "Eco" },
  { id: "retrolow", nazov: "Retro Low Classic", cena: "159.00 €", foto: "/ecostreet.png", tag: "Eco" },
  { id: "retrolow", nazov: "Retro Low Classic", cena: "159.00 €", foto: "/urbanlow.png", tag: "Eco" },
  { id: "retrolow", nazov: "Retro Low Classic", cena: "159.00 €", foto: "/retrolow..png", tag: "Eco" },
 
  // Sem si hoď toľko topánok, koľko chceš mať v gride
];

export default function ProduktyPage() {
  return (
    <main className="min-h-screen  pt-32 pb-20">
      <div className="max-w-[1800px] mx-auto px-6">
        
        {/* HLAVIČKA SEKCIÍ */}
        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-bold uppercase tracking-tighter">
            Kolekcia Spring <span className="text-zinc-400 font-light">({vsetkyProdukty.length})</span>
          </h1>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <button className="hover:opacity-50">Skryť filtre</button>
            <button className="hover:opacity-50">Zoradiť podľa ▼</button>
          </div>
        </div>

        <div className="flex gap-12">
          
          {/* SIDEBAR (FILTRE) - Zmizne na mobile */}
          <aside className="hidden lg:block w-64 space-y-8">
            <div className="space-y-4 border-t pt-4">
              <h3 className="font-bold uppercase text-[10px] tracking-[0.2em]">Kategórie</h3>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:font-bold">Lifestyle</li>
                <li className="cursor-pointer hover:font-bold">Skateboarding</li>
                <li className="cursor-pointer hover:font-bold">Running</li>
              </ul>
            </div>
            {/* Pridaj ďalšie filtre (Farba, Cena, Veľkosť) */}
          </aside>

          {/* GRID S PRODUKTMI */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-4">
            {vsetkyProdukty.map((produkt, index) => (
              <Link href={`/produkt/${produkt.id}`} key={produkt.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  {/* OBRÁZOK */}
                  <div className="aspect-square bg-zinc-50 relative overflow-hidden mb-4">
                    <Image 
                      src={produkt.foto} 
                      alt={produkt.nazov} 
                      fill 
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" 
                    />
                    {produkt.tag && (
                      <span className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-tighter border border-black">
                        {produkt.tag}
                      </span>
                    )}
                  </div>
                   {/* ========================================================= */}
 

                  {/* INFO */}
                  <div className="space-y-1">
                    <h2 className="font-bold uppercase text-sm tracking-tight group-hover:text-red-600 transition-colors">
                      {produkt.nazov}
                    </h2>
                    <p className="text-zinc-400 text-xs">Mestská kolekcia 2026</p>
                    <p className="text-sm font-bold mt-2">{produkt.cena}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

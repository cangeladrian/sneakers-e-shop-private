"user client";
import { section } from "framer-motion/client";
import React from "react";
import { useState } from "react";




export default function Filter() {
const shoes = [
  { id: 1, name: "Nike Air Max", price: 120 },
  { id: 2, name: "Adidas Ultraboost", price: 180 },
  { id: 3, name: "Puma RS-X", price: 100 },
  { id: 4, name: "Reebok Classic", price: 80 },
];

const [pamet, setprepisovac] = useState("Všetky");

    const vysledokfiltra = shoes.filter((topanka) => {
        if (pamet === "Všetky") return true;
        return topanka.name === pamet;
}
);




return (

    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className=" grid-col:3">
        <button onClick={() => setprepisovac("Všetky")}>Všetky</button>
        <button onClick={() => setprepisovac("Nike Air Max")}>Nike Air Max</button>
        <button onClick={() => setprepisovac("Adidas Ultraboost")}>Adidas Ultraboost</button>
        <button onClick={() => setprepisovac("Puma RS-X")}>Puma RS-X</button>
        <button onClick={() => setprepisovac("Reebok Classic")}>Reebok Classic</button>
    </div>

      </section>


);

}



export default function pocitadlo() { 

    const [pocet, setPocet] = useState(0);
    const handleZvýšiť =  () => {
        setPocet(pocet + 1);
    };  

    return (
        <div>
            <p>Počet: {pocet}</p>
            <button onClick={() => handleZvýšiť}>pocet</button>
          
        </div>
    );




}



export default function tlacidlo() {
    const [stav, setStav] = useState("true");

    const stavtlacidla = () => {
        (stav === "Vypnuté" ? true : false) ? setStav("Zapnuté") : setStav("Vypnuté");
    };

    
       

        return (
            <div>
                <p>Stav: {stav}</p>
                <button onClick={stavtlacidla}>cena</button>
            </div>
        );
    }





}

export default function Tlacidlo() {
    // 1. Použijeme boolean (true/false), nie text
    const [ukazCenu, setUkazCenu] = useState(true);

    const prepnutStav = () => {
        // 2. Toto je všetko! "Nastav opak toho, čo tam je teraz."
        setUkazCenu(!ukazCenu);
    };

    return (
        <div>
            {/* 3. Teraz sa rozhodujeme podľa boolean hodnoty */}
            <p>Stav ceny: {ukazCenu ? "Zapnuté" : "Vypnuté"}</p>
            <button onClick={prepnutStav}>Prepnúť cenu</button>
        </div>
    );
}
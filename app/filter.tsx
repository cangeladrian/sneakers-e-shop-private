"user client";
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
    <div>
        <button onClick={() => setprepisovac("Všetky")}>Všetky</button>
        <button onClick={() => setprepisovac("Nike Air Max")}>Nike Air Max</button>
        <button onClick={() => setprepisovac("Adidas Ultraboost")}>Adidas Ultraboost</button>
        <button onClick={() => setprepisovac("Puma RS-X")}>Puma RS-X</button>
        <button onClick={() => setprepisovac("Reebok Classic")}>Reebok Classic</button>
    </div>
);

}
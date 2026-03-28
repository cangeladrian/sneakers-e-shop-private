"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  // --- TOTO TU MUSÍ BYŤ, ABY TI ZMIZLO ČERVENÉ PODČIARKNUTIE ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block mix-blend-difference"
      animate={{ 
        x: mousePos.x, 
        y: mousePos.y,
        scaleY: isHovering ? 1.8 : 1, 
        scaleX: isHovering ? 0.9 : 1, 
        rotate: isHovering ? 15 : 0,
      }}
      transition={{ type: 'spring', stiffness: 1200, damping: 50, mass: 0.2 }}
    >
      <svg 
        width="16" 
        height="50" 
        viewBox="0 0 26 50" 
        fill="none" 
        style={{ transform: 'translate(-3px, -3px)' }} 
      >
        <path d="M0 0V50L8.5 37H26L0 0Z" fill="white" />
      </svg>
    </motion.div>
  );
}
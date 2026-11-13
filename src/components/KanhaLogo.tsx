import React from 'react';

interface KanhaLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

/**
 * Authentic high-definition Kanha Hospitals original brand logo
 * Blue Emblem + KANHA HOSPITALS (Urology | Nephrology | Andrology)
 * Pristine transparent vector-grade asset with zero wave lines or ghosting
 */
export const KanhaLogo: React.FC<KanhaLogoProps> = ({ 
  className = "h-11 w-auto", 
  variant = 'color' 
}) => {
  const logoSrc = variant === 'white' 
    ? "/images/kanha-logo-white.png" 
    : "/images/kanha-logo.png";

  return (
    <img 
      src={logoSrc}
      alt="Kanha Hospitals - Urology | Nephrology | Andrology" 
      className={`object-contain select-none transition-transform duration-200 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};

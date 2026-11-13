import React from 'react';

interface KanhaLogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

/**
 * Authentic high-definition Kanha Hospitals original brand logo
 * Urology | Nephrology | Andrology + 24 Multi-Specialties
 * Backed by 4K master transparent asset (1940x580)
 */
export const KanhaLogo: React.FC<KanhaLogoProps> = ({ 
  className = "h-11 w-auto", 
  variant = 'color' 
}) => {
  const isWhite = variant === 'white';
  const logoSrc = isWhite 
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

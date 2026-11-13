import React from 'react';

interface KanhaLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'merged';
}

/**
 * Authentic high-definition Kanha Hospitals original brand logo
 * Urology | Nephrology | Andrology + 24 Multi-Specialties
 * Backed by 4K master transparent asset (1940x580) and merged capsule with signature blue wave
 */
export const KanhaLogo: React.FC<KanhaLogoProps> = ({ 
  className = "h-11 w-auto", 
  variant = 'color' 
}) => {
  let logoSrc = "/images/kanha-logo.png";
  if (variant === 'white') {
    logoSrc = "/images/kanha-logo-white.png";
  } else if (variant === 'merged') {
    logoSrc = "/images/kanha-logo-merged-capsule.png";
  }

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

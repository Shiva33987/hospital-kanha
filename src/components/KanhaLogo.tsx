import React from 'react';

interface KanhaLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'cyan' | 'merged';
}

/**
 * Authentic Kanha Hospitals brand logo
 * Features the signature emblem and stacked "Kanha Hospitals" typography
 */
export const KanhaLogo: React.FC<KanhaLogoProps> = ({ 
  className = "h-10 w-auto", 
  variant = 'color' 
}) => {
  let logoSrc = "/images/kanha-logo.png";
  if (variant === 'white') {
    logoSrc = "/images/kanha-logo-white.png";
  } else if (variant === 'cyan') {
    logoSrc = "/images/kanha-logo-cyan.png";
  } else if (variant === 'merged') {
    logoSrc = "/images/kanha-logo-white.png";
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

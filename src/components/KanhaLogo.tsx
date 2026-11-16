import React from 'react';

interface KanhaLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'cyan' | 'merged' | 'capsule' | 'card';
}

/**
 * Official Kanha Hospitals brand logo (Navy Blue #011a53 emblem & typography)
 * Urology | Nephrology | Andrology
 */
export const KanhaLogo: React.FC<KanhaLogoProps> = ({ 
  className = "h-10 w-auto", 
  variant = 'color' 
}) => {
  let logoSrc = "/images/kanha-logo.png";
  if (variant === 'white') {
    logoSrc = "/images/kanha-logo-white.png";
  } else if (variant === 'capsule' || variant === 'merged') {
    logoSrc = "/images/kanha-logo-capsule.png";
  } else if (variant === 'card') {
    logoSrc = "/images/kanha-logo-original.jpg";
  }

  return (
    <img 
      src={logoSrc}
      alt="Kanha Hospitals - Urology | Nephrology | Andrology" 
      className={`object-contain select-none transition-transform duration-200 drop-shadow-[0_1px_8px_rgba(37,99,235,0.3)] ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};

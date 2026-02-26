
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'icon' | 'text';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'icon' }) => {
  const src = variant === 'text' ? "/assets/logo-text.svg" : "/assets/logo.svg";
  
  return (
    <img 
      src={src} 
      alt="DataCraft AI Logo" 
      className={className}
    />
  );
};

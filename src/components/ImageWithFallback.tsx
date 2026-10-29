import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'Divine Homes Furniture Chiniot',
  className = '',
  containerClassName = '',
  fallbackSrc = '/images/hero_bedroom.jpg',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#E8DFD0]/60 ${containerClassName}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-[#E8DFD0]/70 flex items-center justify-center">
          <span className="text-xs uppercase tracking-widest text-[#173D32] font-medium">Loading Craftsmanship...</span>
        </div>
      )}

      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-[#E8DFD0] text-[#262824]">
          <svg className="w-10 h-10 mb-2 opacity-70 text-[#C5A15B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-serif text-sm font-medium text-[#262824]">{alt}</span>
          <span className="text-xs text-[#173D32] mt-1">Divine Homes Handcrafted Piece</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};

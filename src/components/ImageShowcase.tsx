import React from 'react';
import Image from 'next/image';

interface BadgeProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: BadgeProps) => (
  <div className={`${color === 'orange' ? 'bg-orange-500' : 'bg-yellow-400'} 
    text-white px-4 py-2 rounded-xl transform rotate-[-6deg] shadow-lg
    font-semibold text-lg inline-block`}>
    {text}
  </div>
);

const DotPattern = () => (
  <div className="absolute grid grid-cols-4 gap-1">
    {[...Array(16)].map((_, i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-orange-300"
      />
    ))}
  </div>
);

interface ImageContainerProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ImageContainer = ({ src, alt, priority = false }: ImageContainerProps) => (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-white p-2">
        <div className="rounded-2xl overflow-hidden">
        <Image 
            src={src}
            alt={alt}
            width={800}
            height={500}
            priority={priority}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                40vw"
        />
        </div>
    </div>
);

const ImageShowcase = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative">
          {/* Left Column */}
          <div className="space-y-4 sm:space-y-6">
            {/* Top Image with Easy Badge */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 z-10">
                <Badge text="Easy" color="orange" />
              </div>
              <ImageContainer 
                src="/woman-laptop.jpg"
                alt="Woman working on laptop with boxes"
                priority={true}
              />
              {/* Dot Pattern */}
              <div className="absolute -left-8 -bottom-8 z-0 hidden sm:block">
                <DotPattern />
              </div>
            </div>


          </div>

          {/* Right Column */}
          <div className="lg:mt-auto relative">
            {/* Financial Literacy Image */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 z-10">
                <Badge text="Empower" color="yellow" />
              </div>
              <ImageContainer 
                src="/financial-literacy.jpg"
                alt="Financial literacy notebook"
              />
              {/* Dot Pattern */}
              <div className="absolute -right-8 -top-8 z-0 hidden sm:block">
                <DotPattern />
              </div>
            </div>

            {/* Sparkle Effect */}
            <div className="absolute -right-4 top-1/2 text-yellow-400">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9 9H2L7 14L5 21L12 17L19 21L17 14L22 9H15L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <DotPattern />
        </div>
        <div className="absolute -right-12 bottom-24 hidden lg:block">
          <DotPattern />
        </div>
      </div>
    </div>
  );
};

export default ImageShowcase;
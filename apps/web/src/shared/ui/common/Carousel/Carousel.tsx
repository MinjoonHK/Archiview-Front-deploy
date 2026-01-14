'use client';

import { useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/shared/lib/cn';

interface ICarouselProps {
  children: React.ReactNode;
  onIndexChange?: (index: number) => void;
  showIndicator?: boolean;
  loop?: boolean;
  className?: string;
}

export const Carousel = ({
  children,
  onIndexChange,
  showIndicator,
  loop = false,
  className,
}: ICarouselProps) => {
  const slides = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setCurrentIndex(index);
      onIndexChange?.(index);
    };

    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onIndexChange]);

  return (
    <div className={cn('flex flex-col', className)}>
      {/* viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showIndicator && (
        <div className="mt-4 inline-flex items-center gap-1">
          {slides.map((_, index) => (
            <span
              key={index}
              className={cn(
                'h-2 w-2 rounded-full bg-neutral-30',
                currentIndex === index && 'bg-primary-40',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

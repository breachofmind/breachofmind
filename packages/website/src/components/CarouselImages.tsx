type CP_CarouselImages = {
  reverse?: boolean;
  start: number;
  end: number;
};

export function CarouselImages({ reverse, start, end }: CP_CarouselImages) {
  const className = reverse ? 'carousel-group reverse' : 'carousel-group';
  const images = Array.from({ length: end - start }).map((_, i) => (
    `thumbs/${i + start}.jpg`
  ));
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className={className}>
          {images.map((src) => (
            <img src={src} className="carousel-mock-image" key={src} />
          ))}
        </div>
        <div className={className} aria-hidden="true">
          {images.map((src) => (
            <img src={src} className="carousel-mock-image" key={src} />
          ))}
        </div>
      </div>
    </div>
  )
}

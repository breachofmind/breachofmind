import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

// const LINKS = [
//   {
//     name: 'Instagram',
//     href: 'https://www.instagram.com/breach_of_mind',
//   },
//   {
//     name: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/michael-adamczyk-22271867',
//   },
//   {
//     name: 'GitHub',
//     href: 'https://github.com/breachofmind',
//   }
// ];

type CP_CarouselImages = {
  reverse?: boolean;
};


function CarouselImages({ reverse }: CP_CarouselImages) {
  const length = 8;
  const className = reverse ? 'carousel-group reverse' : 'carousel-group';
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        <div className={className}>
          {Array.from({ length }).map((_, i) => (
            <div className="carousel-mock-image" key={i}></div>
          ))}
        </div>
        <div className={className} aria-hidden="true">
          {Array.from({ length }).map((_, i) => (
            <div className="carousel-mock-image" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

type CP_TitleLine = {
  name: string;
  reverse?: boolean;
};

function TitleLine({ name, reverse }: CP_TitleLine) {
  return (
    <div className="title-line">
      <div className="title-overlay">
        <div className={`title-overlay-image title-overlay-image--${name}`}></div>
      </div>
      <div className="title-images">
        <CarouselImages reverse={reverse} />
      </div>
    </div>
  )
}

function App() {
  return (
    <main>
      <TitleLine name="mike"/>
      <TitleLine name="adam" reverse />
      <TitleLine name="czyk"/>
      <TitleLine name="breachofmind" reverse />
    </main>
  )
}

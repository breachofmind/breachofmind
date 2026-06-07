import { CarouselImages } from "#/components/CarouselImages.tsx";

type CP_TitleLine = {
  name: string;
  reverse?: boolean;
  start: number;
  end: number;
};


export function TitleLine({ name, reverse, start, end }: CP_TitleLine) {
  return (
    <div className="title-line">
      <div className="title-overlay">
        <div className={`title-overlay-image title-overlay-image--${name}`}></div>
      </div>
      <div className="title-images">
        <CarouselImages reverse={reverse} start={start} end={end} />
      </div>
    </div>
  )
}

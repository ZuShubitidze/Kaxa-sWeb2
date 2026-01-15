import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./card";

interface CarouselComponentProps {
  items: { img: string[]; name: string; id: string }[];
}

const CarouselComponent = ({ items }: CarouselComponentProps) => {
  return (
    <Carousel id="carousel" className="w-2/3">
      <CarouselContent>
        {items.map(({ img, name, id }) => (
          <CarouselItem key={id} className="basis-1/1 lg:basis-1/3">
            <Link to={`/${id}`}>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center gap-10">
                  <span className="text-3xl font-semibold">Name: {name}</span>
                  <img src={img[0]} alt={name} className="w-full" />
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;

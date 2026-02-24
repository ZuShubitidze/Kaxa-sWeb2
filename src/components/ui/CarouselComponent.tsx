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
  items: {
    img: string | string[];
    name: string;
    id: string;
    price: number | string;
  }[];
}

const CarouselComponent = ({ items }: CarouselComponentProps) => {
  return (
    <Carousel id="carousel" className="w-2/3">
      <CarouselContent>
        {items.map(({ img, name, id, price }) => (
          <CarouselItem key={id} className="basis-1/1 lg:basis-1/3">
            <Link to={`/products#product-${id}`}>
              <Card className="bg-zinc-300 dark:bg-slate-800">
                <CardContent className="flex flex-col items-center gap-4 md:gap-10">
                  <h2 className="text-auto font-semibold line-clamp-1">
                    {name}
                  </h2>
                  <span>ფასი - {price}</span>
                  <div className="w-full aspect-3/5 overflow-hidden rounded-lg">
                    <img
                      src={Array.isArray(img) ? img[0] : img}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
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

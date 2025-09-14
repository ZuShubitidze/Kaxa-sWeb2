import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import image1 from "@/assets/1.jpeg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import { Card, CardContent } from "./ui/card";

export const array = [
  { img: image1, name: "სამუშაო 1", id: "1" },
  { img: image2, name: "სამუშაო 2", id: "2" },
  { img: image3, name: "სამუშაო 3", id: "3" },
  { img: image4, name: "სამუშაო 4", id: "4" },
];

const CarouselComponent = () => {
  return (
    <Carousel className="w-2/3">
      <CarouselContent>
        {array.map(({ img, name, id }) => (
          <CarouselItem key={id} className="basis-1/1 lg:basis-1/3">
            <Link to={`/${id}`}>
              <Card>
                <CardContent className="flex flex-col aspect-square items-center gap-10">
                  <span className="text-3xl font-semibold">{name}</span>
                  <img src={img} alt={name} className="w-full" />
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

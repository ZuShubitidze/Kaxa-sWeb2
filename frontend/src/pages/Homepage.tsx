import image1 from "@/assets/1.jpeg";
import image2 from "@/assets/2.jpeg";
import image3 from "@/assets/3.jpeg";
import image4 from "@/assets/4.jpeg";
import CarouselComponent from "@/components/ui/CarouselComponent";

export const array = [
  { img: image1, name: "სამუშაო 1", id: "1" },
  { img: image2, name: "სამუშაო 2", id: "2" },
  { img: image3, name: "სამუშაო 3", id: "3" },
  { img: image4, name: "სამუშაო 4", id: "4" },
];

const Homepage = () => {
  return (
    <main className="px-5 md:px-20 py-5 flex flex-col gap-10 md:gap-20">
      <section
        aria-label="carousel"
        role="region"
        className="flex justify-center"
      >
        <CarouselComponent items={array} />
      </section>
    </main>
  );
};

export default Homepage;

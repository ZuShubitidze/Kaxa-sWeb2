import CarouselComponent from "@/components/ui/CarouselComponent";
import { completedWorksArray } from "@/data/completedWorks";

const Homepage = () => {
  return (
    <main className="px-5 md:px-20 py-5 flex flex-col gap-10 md:gap-20">
      <section
        aria-label="carousel"
        role="region"
        className="flex justify-center"
      >
        <CarouselComponent items={completedWorksArray} />
      </section>
    </main>
  );
};

export default Homepage;

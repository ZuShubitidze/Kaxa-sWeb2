import SEO from "@/components/SEO";
import CarouselComponent from "@/components/ui/CarouselComponent";
import { completedWorksArray } from "@/data/completedWorks";

const HomePage = () => {
  return (
    <>
      <SEO
        title="მთავარი"
        description="კახა შუბითიძე გთავაზობთ სასაფლაოს გაკეთებას, ჯვრებს და ა.შ."
        path="/"
      />
      <main className="px-5 md:px-20 py-5 flex flex-col gap-10 md:gap-20">
        <section
          aria-label="carousel"
          role="region"
          className="flex justify-center"
        >
          <CarouselComponent items={completedWorksArray} />
        </section>
      </main>
    </>
  );
};

export default HomePage;

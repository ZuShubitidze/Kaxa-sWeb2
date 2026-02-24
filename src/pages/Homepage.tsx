import SEO from "@/components/SEO";
import CarouselComponent from "@/components/ui/CarouselComponent";
import { productsArray } from "@/data/products";

const HomePage = () => {
  const featureProducts = productsArray.filter((product) => product.featured);

  return (
    <>
      <SEO
        title="მთავარი"
        description="კახა შუბითიძე გთავაზობთ სასაფლაოს, ჯვრების, ბუხრების და ა.შ. გაკეთებას. ასევე, შეგიძლიათ შეიძინოთ მისი ხელით დამზადებული პროდუქტები."
        path="/"
      />
      <main className="px-5 md:px-6 py-5 flex flex-col gap-10 md:gap-20">
        <section
          aria-label="carousel"
          role="region"
          className="flex justify-around"
        >
          <CarouselComponent items={featureProducts} />
        </section>
      </main>
    </>
  );
};

export default HomePage;

import CarouselComponent from "@/components/CarouselComponent";

const Homepage = () => {
  return (
    <div className="px-5 md:px-20 py-5 flex flex-col gap-10 md:gap-20">
      <main>
        <div className="flex justify-center">
          <CarouselComponent />
        </div>
      </main>
    </div>
  );
};

export default Homepage;

import { array } from "@/components/CarouselComponent";
import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const WorkPage = () => {
  const { id } = useParams();
  const work = array.filter((i) => i.id === id);

  return (
    <div className="flex flex-row px-5 md:px-20 gap-10">
      <section className="w-1/3 flex flex-col gap-10 mt-10">
        <h1>ეს არის ჩემს მიერ შესრულებული სამუშაო</h1>
        <p>
          This is the description of this work Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis laboriosam nemo aspernatur
          labore, voluptates vitae necessitatibus sed cum porro quasi. Quos
          soluta quisquam alias totam corrupti dignissimos doloremque aut quae!
        </p>
      </section>
      <main className="w-2/3">
        {work.map(({ id, img, name }) => (
          <Card key={id} className="p-4 md:p-10 flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-semibold">{name}</span>
            <img
              src={img}
              alt="image1"
              className="object-cover lg:w-2/3 rounded-lg"
            />
          </Card>
        ))}
      </main>
    </div>
  );
};

export default WorkPage;

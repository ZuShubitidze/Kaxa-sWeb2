import WorkCard from "@/components/WorkCard";
import type { WorkCard as WorkCardType } from "@/interfaces/workCard.interface";
import { useParams } from "react-router-dom";
import { array } from "./Homepage";

const Workpage = () => {
  const { id } = useParams();
  const work = array.filter((i: WorkCardType) => i.id === id);

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
        {work.map(({ id, img, name }: WorkCardType) => (
          <WorkCard key={id} id={id} img={img} name={name} />
        ))}
      </main>
    </div>
  );
};

export default Workpage;

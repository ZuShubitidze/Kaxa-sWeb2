import WorkCard from "@/components/WorkCard";
import { completedWorksArray } from "@/data/completedWorks";
import type { WorkCard as WorkCardType } from "@/interfaces/workCard.interface";

const CompletedWorks = () => {
  return (
    <section className="flex flex-col gap-20 items-center mx-10 md:mx-30">
      <h1>შესრულებული სამუშაოები</h1>
      <ul className="flex flex-col gap-20">
        {completedWorksArray.map(({ id, img, name }: WorkCardType) => (
          <li className="flex flex-row gap-10" key={id}>
            <div className="flex flex-col gap-10">
              <h1>ეს არის ჩემს მიერ შესრულებული სამუშაო</h1>
              <p>
                This is the description of this work Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facilis laboriosam nemo aspernatur
                labore, voluptates vitae necessitatibus sed cum porro quasi.
                Quos soluta quisquam alias totam corrupti dignissimos doloremque
                aut quae!
              </p>
            </div>
            <WorkCard key={id} id={id} img={img} name={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedWorks;

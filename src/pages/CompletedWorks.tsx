import SEO from "@/components/SEO";
import WorkCard from "@/components/WorkCard";
import { completedWorksArray } from "@/data/completedWorks";
import type { WorkCard as WorkCardType } from "@/interfaces/workCard.interface";

const CompletedWorks = () => {
  return (
    <main className="flex flex-col gap-20 items-center mx-10 md:mx-30">
      <SEO
        title="შესრულებული სამუშაოები"
        description="კახა შუბითიძის მიერ შესრულებული სამუშაოები."
        path="/completed-works"
      />
      <h1>შესრულებული სამუშაოები</h1>
      <ul className="flex flex-col gap-10 md:gap-20">
        {completedWorksArray.map(({ id, img, name }: WorkCardType) => (
          <li
            className="flex flex-col md:flex-row gap-10 border-b border-gray-300 pb-10"
            key={id}
          >
            <WorkCard key={id} img={img} name={name} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CompletedWorks;

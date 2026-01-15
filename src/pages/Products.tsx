import WorkCard from "@/components/WorkCard";
import { productsArray } from "@/data/products";
import type { WorkCard as WorkCardType } from "@/interfaces/workCard.interface";

const Products = () => {
  return (
    <section className="flex flex-col gap-20 items-center mx-10 md:mx-30">
      <h1>შესრულებული სამუშაოები</h1>
      <ul className="flex flex-col gap-20">
        {productsArray.map(({ id, img, name, price }: WorkCardType) => (
          <li className="flex flex-row gap-10" key={id}>
            <div className="flex flex-col gap-10">
              <h1>ეს არის ჩემს მიერ შესრულებული სამუშაო</h1>
              <p>ფასი: {price} ლარი</p>
              <p>
                This is the description of this work Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facilis laboriosam nemo aspernatur
                labore, voluptates vitae necessitatibus sed cum porro quasi.
                Quos soluta quisquam alias totam corrupti dignissimos doloremque
                aut quae!
              </p>
              <a href="tel:+995599923598">599 92 35 98 - კახა შუბითიძე</a>
              ან
              <a href="tel:+995558188548">558 18 85 48 - ზურა შუბითიძე</a>
            </div>
            <WorkCard key={id} id={id} img={img} name={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;

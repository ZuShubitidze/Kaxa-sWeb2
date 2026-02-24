import SEO from "@/components/SEO";
import WorkCard from "@/components/WorkCard";
import { productsArray } from "@/data/products";
import type { WorkCard as WorkCardType } from "@/interfaces/workCard.interface";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="flex flex-col gap-20 items-center mx-10 md:mx-30">
      <SEO
        title="პროდუქტები"
        description="კახა შუბითიძის გასაყიდი პროდუქტები."
        path="/products"
      />
      <ul className="flex flex-col gap-20">
        {productsArray.map(({ id, img, name, price }: WorkCardType) => (
          <li
            className="flex flex-col md:flex-row gap-2 md:gap-10 border-b border-gray-300 pb-10 scroll-mt-20"
            id={`product-${id}`}
            key={id}
          >
            <WorkCard key={id} img={img} name={name} />
            <div className="flex flex-col gap-10">
              <p>
                This is the description of this work Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Facilis laboriosam nemo aspernatur
                labore, voluptates vitae necessitatibus sed cum porro quasi.
                Quos soluta quisquam alias totam corrupti dignissimos doloremque
                aut quae!
              </p>
              <p>ფასი: {price}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Products;

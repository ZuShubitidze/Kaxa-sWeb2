import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <main className="flex flex-col px-5 md:px-20 gap-6 md:8 mt-10">
      <SEO
        title="ჩვენს შესახებ"
        description="კახა შუბითიძე გთავაზობთ სასაფლაოს გაკეთებას, ჯვრებს. საკონტაქტო ინფორმაციის გვერდი."
        path="/about"
      />
      <h1 className="text-2xl font-bold">გვერდი ჩემს შესახებ</h1>
      <section className="text-lg">
        ჩემი სახელია კახა შუბითიძე, ხელოსანი. ვაკეთებ სხვადასხვა სახის
        სამუშაოებს, მათ შორის სასაფლოებს.
      </section>
      <section className="text-lg">
        ჩემი საკონტაქტო ინფორმაცია იხილეთ ქვემოთ:
      </section>
      <section>
        <ul className="list-disc list-inside text-lg">
          <li>
            ელ. ფოსტა:{" "}
            <a href="mailto:kaxabershubitidze123@gmail.com">
              kaxabershubitidze123@gmail.com
            </a>
          </li>
          <li>
            ტელეფონის ნომერი: <a href="tel:599923598">599 92 35 98</a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default AboutPage;

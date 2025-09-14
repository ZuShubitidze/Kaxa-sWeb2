const Aboutpage = () => {
  return (
    <main className="flex flex-col px-5 md:px-20 gap-6 md:8 mt-10">
      <h1 className="text-2xl font-bold">გვერდი ჩემს შესახებ</h1>
      <p className="text-lg">
        ჩემი სახელია კახა შუბითიძე, ხელოსანი. ვაკეთებ სხვადასხვა სახის
        სამუშაოებს, მათ შორის სასაფლოებს.
      </p>
      <p className="text-lg">ჩემი საკონტაქტო ინფორმაცია იხილეთ ქვემოთ:</p>
      <ul className="list-disc list-inside text-lg">
        <li>
          ელ. ფოსტა:{" "}
          <a href="mailto:kaxabershubitidze123@gmail.com">
            kaxabershubitidze123@gmail.com
          </a>
        </li>
        <li>
          ტელეფონი: <a href="tel:599923598">599 92 35 98</a>
        </li>
      </ul>
    </main>
  );
};

export default Aboutpage;

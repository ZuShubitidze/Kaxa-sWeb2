import SEO from "@/components/SEO";

const contacts = [
  {
    name: "Kaxa Shubitidze",
    email: "kaxabershubitidze123@gmail.com",
    phone: "599 92 35 98",
  },
  {
    name: "Zura Shubitidze",
    email: "zurashubitidze123@gmail.com",
    phone: "558 18 85 48",
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto sm:p-8">
      <SEO
        title="კონტაქტი"
        description="კახა და ზურა შუბითიძის საკონტაქტო ინფორმაცია."
        path="/contact"
      />
      {/* Header */}
      <section>
        <h1 className="text-3xl font-semibold mb-8 tracking-tight pl-4 md:pl-0">
          საკონტაქტო ინფორმაცია
        </h1>
      </section>
      {/* Contacts */}
      <section className="flex flex-col gap-2">
        {contacts.map((contacts) => (
          <div
            key={contacts.name}
            className="bg-card w-full sm:w-auto border rounded-lg shadow-sm divide-y"
          >
            <div
              key={contacts.email}
              className={`flex flex-col items-center gap-4 p-6 sm:flex-row`}
            >
              <div className="flex-1">
                <div className="font-medium text-2xl sm:text-4xl">
                  {contacts.name}
                </div>
                <div className="text-sm sm:text-2xl text-muted-foreground">
                  <a href="mailto:kaxabershubitidze71@gmail.com">
                    {contacts.email}
                  </a>
                </div>
                <div className="text-lg text-muted-foreground">
                  {contacts.phone}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

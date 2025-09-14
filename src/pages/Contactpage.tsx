import Kaxa from "@/assets/Kaxa.png";

const contacts = {
  name: "Kaxa Shubitidze",
  email: "kaxabershubitidze123@gmail.com",
  phone: "599 92 35 98",
  avatar: Kaxa,
};

export default function Contactspage() {
  return (
    <div className="max-w-2xl mx-auto sm:p-8">
      <h1 className="text-3xl font-semibold mb-8 tracking-tight">
        საკონტაქტო ინფორმაცია
      </h1>
      <div className="bg-card w-full sm:w-auto border rounded-lg shadow-sm divide-y ">
        <div
          key={contacts.email}
          className={`flex flex-col items-center gap-4 p-6 sm:flex-row`}
        >
          <img
            src={contacts.avatar}
            alt={contacts.name}
            className="h-40 w-40 rounded-full ring-2 ring-primary object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-2xl sm:text-4xl">
              {contacts.name}
            </div>
            <div className="text-sm sm:text-2xl text-muted-foreground">
              <a href="mailto:kaxabershubitidze123@gmail.com">
                {contacts.email}
              </a>
            </div>
            <div className="text-lg text-muted-foreground">
              {contacts.phone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

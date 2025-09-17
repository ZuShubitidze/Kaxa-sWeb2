import { Card } from "./ui/card";

const WorkCard = ({
  id,
  img,
  name,
}: {
  id: string;
  img: string;
  name: string;
}) => {
  return (
    <Card key={id} className="p-4 md:p-10 flex flex-col items-center">
      <span className="text-2xl md:text-4xl font-semibold">{name}</span>
      <img
        src={img}
        alt="image1"
        className="object-cover lg:w-2/3 rounded-lg"
      />
    </Card>
  );
};

export default WorkCard;

import { Card } from "./ui/card";

const WorkCard = ({
  id,
  img,
  name,
}: {
  id: string;
  img: string | string[];
  name: string;
}) => {
  return (
    <Card
      key={id}
      className="p-4 md:p-10 lg:px-0 lg:py-10 flex flex-col items-center"
    >
      <span className="text-2xl md:text-4xl font-semibold">{name}</span>
      {Array.isArray(img) ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center mt-5">
          {img.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image${index + 1}`}
              className="flex flex-wrap rounded-lg lg:w-1/3"
            />
          ))}
        </div>
      ) : (
        <img
          src={img}
          alt="image1"
          className="object-cover rounded-lg md:w-1/2"
        />
      )}
    </Card>
  );
};

export default WorkCard;

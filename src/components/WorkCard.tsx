import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Card } from "./ui/card";

const WorkCard = ({ img, name }: { img: string | string[]; name: string }) => {
  const images = Array.isArray(img) ? img : [img];

  return (
    <Card className="mx-auto my-6 p-6 flex flex-col items-center w-full max-w-5xl shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">{name}</h2>
      <div
        className={`grid gap-3 w-full ${
          images.length > 1 ? "grid-cols-2" : "grid-cols-1 max-w-2xl"
        }`}
      >
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="aspect-square w-full overflow-hidden rounded-md bg-muted cursor-zoom-in border">
                <img
                  src={image}
                  alt={`${name}-${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </DialogTrigger>

            <DialogContent
              className="max-w-[90vw] md:max-w-4xl border-none bg-transparent p-0 shadow-none"
              aria-describedby={undefined}
            >
              <VisuallyHidden>
                <DialogTitle>
                  {name} - Image {index + 1}
                </DialogTitle>
              </VisuallyHidden>

              <img
                src={image}
                alt={name}
                className="w-full h-auto max-h-[90vh] object-contain rounded-md"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Card>
  );
};

export default WorkCard;

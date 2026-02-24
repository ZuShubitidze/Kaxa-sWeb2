export const imageModules = import.meta.glob(
  "../../public/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
    import: "default",
  },
);
// Convert the object into a simple array or formatted object
export const images = Object.values(imageModules) as string[];

import { images } from "./images";

const crossList = [images[16], images[12], images[13], images[15]];

export const productsArray = [
  {
    id: "1",
    name: "ჯვარი",
    img: images[14],
    price: "დაგვიკავშირდით",
    featured: true,
  },
  {
    id: "2",
    name: "ანგელოზი",
    img: images[19],
    price: "დაგვიკავშირდით",
    featured: true,
  },
  {
    id: "3",
    name: "ჯვარი",
    img: images[20],
    price: "დაგვიკავშირდით",
    featured: true,
  },
  { id: "4", name: "ეკლესია", img: images[6], price: 100, featured: true },
  { id: "5", name: "ჯვარი", img: images[4], price: 100, featured: false },
  { id: "6", name: "გული", img: images[5], price: 100, featured: false },
  {
    id: "7",
    name: "ანგელოზი და მტრედი",
    img: images[9],
    price: "დაგვიკავშირდით",
    featured: false,
  },
  {
    id: "8",
    name: "მტრედი",
    img: images[10],
    price: "დაგვიკავშირდით",
    featured: false,
  },
  {
    id: "9",
    name: "ჯვარი",
    img: images[11],
    price: "დაგვიკავშირდით",
    featured: false,
  },
  {
    id: "10",
    name: "ჯვარი",
    img: crossList,
    price: "დაგვიკავშირდით",
    featured: false,
  },
  {
    id: "11",
    name: "სასანთლე",
    img: images[21],
    price: "დაგვიკავშირდით",
    featured: false,
  },
  {
    id: "12",
    name: "მრგვალი ჯვარი",
    img: images[22],
    price: 100,
    featured: true,
  },
];

console.log(images);

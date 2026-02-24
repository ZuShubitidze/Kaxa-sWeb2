import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 md:p-10 flex justify-around items-center">
      <p className="pt-1">© {new Date().getFullYear()}</p>
      <Link
        to={"/contact"}
        className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
      >
        კონტაქტი
      </Link>
    </footer>
  );
};

export default Footer;

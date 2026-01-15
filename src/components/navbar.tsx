import { Link, Outlet } from "react-router-dom";
import { ModeToggle } from "./theme/mode-toggle";
import Footer from "./footer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="mb-8">
        {/* Computer Menu */}
        <nav className="hidden md:block">
          <div className="flex flex-row items-center md:gap-20 p-10 ">
            <ModeToggle />
            <Link
              to={"/"}
              className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
            >
              მთავარი გვერდი
            </Link>
            <Link
              to={"/completed-works"}
              className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
            >
              შესრულებული სამუშაოები
            </Link>
            <Link
              to={"/products"}
              className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
            >
              პროდუქტები
            </Link>
            <Link
              to={"/contact"}
              className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
            >
              კონტაქტი
            </Link>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="flex md:hidden p-10 gap-2">
          <ModeToggle />
          <NavigationMenu className="flex gap-5">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>გახსენით მენიუ</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-5 p-5 w-50">
                  <NavigationMenuLink asChild>
                    <a
                      href="/"
                      className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
                    >
                      მთავარი გვერდი
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/contact"
                      className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
                    >
                      კონტაქტი
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="/about"
                      className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
                    >
                      ჩემს შესახებ
                    </a>
                  </NavigationMenuLink>
                  {/* <Link to={"/"}>მთავარი გვერდი</Link> */}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* Outlet and Footer */}
      </header>
      <main className="mb-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Navbar;

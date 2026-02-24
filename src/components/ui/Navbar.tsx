import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { ModeToggle } from "../theme/mode-toggle";

const Navbar = () => {
  return (
    <header className="mb-8">
      {/* Computer Menu */}
      <nav className="hidden md:block">
        <div className="flex flex-row items-center md:gap-20 p-10 ">
          <ModeToggle />
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ${isActive ? "dark:bg-white dark:text-black bg-black text-white" : ""}`
            }
          >
            მთავარი გვერდი
          </NavLink>
          <NavLink
            to={"/completed-works"}
            className={({ isActive }) =>
              `dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ${isActive ? "dark:bg-white dark:text-black bg-black text-white" : ""}`
            }
          >
            სასაფლაოს მოპირკეთება
          </NavLink>
          <NavLink
            to={"/products"}
            className={({ isActive }) =>
              `dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ${isActive ? "dark:bg-white dark:text-black bg-black text-white" : ""}`
            }
          >
            მარმარილო ნაკეთობები
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              `dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white p-2 rounded-md transition-all duration-300 ${isActive ? "dark:bg-white dark:text-black bg-black text-white" : ""}`
            }
          >
            კონტაქტი
          </NavLink>
        </div>
      </nav>
      {/* Mobile Menu */}
      <nav className="flex md:hidden p-10 gap-2">
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
                    href="/completed-works"
                    className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
                  >
                    შესრულებული სამუშაოები
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    href="/products"
                    className="hover:bg-white hover:text-black p-2 rounded-md transition-all duration-300"
                  >
                    პროდუქტები
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
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};
export default Navbar;

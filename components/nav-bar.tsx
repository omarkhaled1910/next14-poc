import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ui/mode-switcher";
import LocaleSwitcher from "./LocalSwitcher";
import LocaleSwitcherSelect from "./ui/locale-switcher";

const NavBar = () => {
  return (
    <NavigationMenu className=" h-20">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuItem>
        <LocaleSwitcherSelect
          children={undefined}
          defaultValue={""}
          label={""}
        />
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

export default NavBar;

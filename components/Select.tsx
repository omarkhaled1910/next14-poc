"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const MyDropdownMenu = () => {
  const handleOptionClick = (option: string) => {
    console.log(`Selected option: ${option}`);
    // You can add logic here to handle the selection of each option
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        Dropdown Menu <ChevronDown className="ml-auto h-4 w-4 inline-flex" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleOptionClick("Option 1")}>
          Option 1
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleOptionClick("Option 2")}>
          Option 2
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className=""
          onClick={() => handleOptionClick("Option 3")}
        >
          Option 3
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MyDropdownMenu;

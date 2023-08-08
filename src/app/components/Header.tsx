"use client"

import Image from "next/image";
import avatar_head from "@/assets/images/avatar_header.png"
import { ChevronDown } from "@/assets/icons";
import { IconButton } from ".";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <div className="bg-gray-800 p-[30px] ps-[71px] pe-[109px] flex flex-row items-center justify-between">
      <h2 className="text-amber-400 text-4xl font-bold font-inter">Pokedex</h2>
      <div className="flex flex-row gap-4 items-center">
        <span>Welcome, [UserName]</span>
        <div className="flex flex-row items-center gap-1">
          <Avatar
            size={57}
            alt="avatar_head"
            img={avatar_head}
          />
          <IconButton onClick={console.log}>
            <ChevronDown />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
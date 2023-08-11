"use client"

import avatar_head from "@/assets/images/avatar_header.png"
import { ChevronDown } from "@/assets/icons";
import { IconButton, Avatar, Popup, MenuItem } from ".";
import { useRef, useState } from "react";

export function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dropdownRef = useRef(null);

  function onLogout() {
    alert("Not implemented");
    setIsPopupOpen(false);
  }
  return (<>
    <div className="bg-gray-800 p-[30px] ps-[71px] pe-[109px] flex flex-row items-center justify-between relative">
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        anchor={dropdownRef}
        position="bottom-left"
        content={(<>
          <MenuItem onClick={onLogout}>
            <span className="text-red-500">Log out</span>
          </MenuItem>
        </>)}
      />
      <h2 className="text-amber-400 text-4xl font-bold">Pokedex</h2>
      <div className="flex flex-row gap-4 items-center text-white">
        <span>Welcome, [UserName]</span>
        <div className="flex flex-row items-center gap-1">
          <Avatar
            size={57}
            alt="avatar_head"
            img={avatar_head}
          />
          <IconButton onClick={() => setIsPopupOpen(true)} ref={dropdownRef}>
            <ChevronDown />
          </IconButton>
        </div>
      </div>
    </div>
  </>)
}
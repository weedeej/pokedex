"use client";

import { Check } from "@/assets/icons";
import { RefObject, useRef } from "react";

type CheckboxProps = {
  checked?: boolean;
  onChange: (v: boolean) => void;
  label?: string
}

export function Checkbox(props: CheckboxProps) {
  const { checked, label, onChange } = props;

  return (<div className="cursor-pointer relative flex flex-row justify-between w-full gap-2 input items-center" onClick={() => onChange(!checked)}>
    <span className="text-black">{label}</span>
    <input
      className="appearance-none rounded overflow-hidden border p-2 z-10"
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    {checked && <div className={`
    rounded absolute bg-yellow-400 w-[17.6px] h-[17.6px] top-0.6 right-0 flex justify-center items-center
    `}><Check/></div>}
  </div>)
}
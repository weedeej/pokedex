"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from 'next/image'
import { useState } from "react"

type CardProps = {
  pk_id: number,
  img: StaticImport,
  title?: string,
  subtitle?: string
}

export function Card(props: CardProps) {
  const { pk_id, img, title, subtitle } = props;
  const [isHovered, setIsHovered] = useState(false);

  function toggleHover() {
    setIsHovered((prev) => !prev)
  }
  console.log(!!title || !!subtitle)
  return (
    <div className="group rounded overflow-hidden relative h-[259px] w-[216px] cursor-pointer" onMouseLeave={toggleHover}  onMouseEnter={toggleHover}>
      {
        isHovered && (
          <div className=" flex flex-col gap-0 justify-end left-[8px] bottom-[8px] z-10 p-4 rounded w-[202px] h-full bg-gradient-to-t from-[rgba(0,0,0,1)] from-1% to-[rgba(255,255,255,0.0)] to-40% absolute">
            <span className="text-white text-lg font-semibold">{subtitle}</span>
            <span className="text-white text-[28px] font-semibold" >{title}</span>
          </div>
        )
      }
      <Image alt={`card_${pk_id}`} src={img} fill loading="lazy" />
    </div>
  )
}
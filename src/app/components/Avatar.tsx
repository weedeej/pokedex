"use client"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
  size: number;
  alt: string;
  img: string | StaticImport;
}

export function Avatar(props: AvatarProps) {
  const {img, size, className, onClick} = props;
  return (
    <div className={`rounded-full overflow-hidden border border-amber-500 ${className}`} onClick={onClick}>
      <Image alt="avatar_img" src={img} width={size} height={size} />
    </div>
  )
}
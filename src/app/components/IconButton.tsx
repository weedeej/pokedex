"use client"

import { ForwardedRef, forwardRef } from "react";

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: (e?: React.MouseEvent) => void;
}

export const IconButton = forwardRef(function IconButton(props: IconButtonProps, ref:ForwardedRef<any>) {
  const {onClick, children, className} = props;

  return (
    <div className={`p-2 rounded-full hover:bg-gray-700 cursor-pointer ${className} items-center`} onClick={onClick} ref={ref}>
      {children}
    </div>
  )
})
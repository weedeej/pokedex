"use client"

type IconButtonProps = {
  children: JSX.Element;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps) {
  const {onClick, children, className} = props;

  return (
    <div className={`p-2 rounded-full hover:bg-gray-700 cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}
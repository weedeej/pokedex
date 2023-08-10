"use client"

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: (e?: React.MouseEvent) => void;
}

export function IconButton(props: IconButtonProps) {
  const {onClick, children, className} = props;

  return (
    <div className={`p-2 rounded-full hover:bg-gray-700 cursor-pointer ${className} items-center`} onClick={onClick}>
      {children}
    </div>
  )
}
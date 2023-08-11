
type MenuItemProps = {
  children: JSX.Element;
  onClick?: () => void;
}

export function MenuItem(props: MenuItemProps) {
  const {children, onClick} = props;
  return (
    <div className="text-black px-4 flex items-center hover:bg-gray-200 w-full cursor-pointer" onClick={onClick}>
      {children}
    </div>
  )
}
import { RefObject } from "react";

type PopupProps = {
  isOpen: boolean,
  onClose: () => void,
  content: JSX.Element,
  anchor: RefObject<any>,
  position?: "bottom-left" | "bottom-right";
  addTop?: number;
  subtractLeft?:number;
}

export function Popup(props: PopupProps) {
  const {isOpen, onClose, content, anchor, position, subtractLeft, addTop} = props;
  if (!isOpen || !anchor.current) return null;

  const {offsetTop, offsetLeft} = anchor.current;
  const pos = {
    top: offsetTop+(addTop ?? 44),
    left: position === "bottom-left" ? offsetLeft-(subtractLeft ?? 215) : offsetLeft-(subtractLeft ?? 64)
  }
  return (
    <div className="absolute flex w-full h-full z-50" onClick={onClose}>
      <div className="flex bg-white rounded-md py-2 absolute min-w-[175px] min-h-[53px]" style={{...pos}} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}
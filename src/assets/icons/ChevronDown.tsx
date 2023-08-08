import { SVGProps } from "react";

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fill={props.fill ?? "#EDF2F7"}
        fillRule="evenodd"
        d="M6.351 8.751a1.2 1.2 0 0 1 1.698 0L12 12.703l3.951-3.952a1.2 1.2 0 1 1 1.697 1.697l-4.8 4.8a1.2 1.2 0 0 1-1.697 0l-4.8-4.8a1.2 1.2 0 0 1 0-1.697Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
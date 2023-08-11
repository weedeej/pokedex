import { SVGProps } from "react"

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#EDF2F7"
      fillRule="evenodd"
      d="M10.166 4.234a.8.8 0 0 1 0 1.132L7.53 8l2.635 2.634a.8.8 0 0 1-1.132 1.132l-3.2-3.2a.8.8 0 0 1 0-1.132l3.2-3.2a.8.8 0 0 1 1.132 0Z"
      clipRule="evenodd"
    />
  </svg>
)
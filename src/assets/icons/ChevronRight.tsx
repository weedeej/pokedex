import { SVGProps } from "react"
export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.834 11.766a.8.8 0 0 1 0-1.132L8.47 8 5.834 5.366a.8.8 0 0 1 1.132-1.132l3.2 3.2a.8.8 0 0 1 0 1.132l-3.2 3.2a.8.8 0 0 1-1.132 0Z"
      clipRule="evenodd"
    />
  </svg>
)
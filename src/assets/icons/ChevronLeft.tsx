import { SVGProps } from "react"

export const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#718096"
      fillRule="evenodd"
      d="M5.166.234a.8.8 0 0 1 0 1.132L2.53 4l2.635 2.634a.8.8 0 1 1-1.132 1.132l-3.2-3.2a.8.8 0 0 1 0-1.132l3.2-3.2a.8.8 0 0 1 1.132 0Z"
      clipRule="evenodd"
    />
  </svg>
)
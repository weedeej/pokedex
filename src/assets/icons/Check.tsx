import * as React from "react"
import { SVGProps } from "react"
export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <path
      stroke="#806917"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.333 2.5 3.75 7.083 1.667 5"
    />
  </svg>
)

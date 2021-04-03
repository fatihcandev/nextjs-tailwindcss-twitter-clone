import * as React from 'react'

function SvgArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width="22.5"
      height="22.5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 11H7.414l4.293-4.293a1 1 0 00-1.414-1.414l-6 6a1 1 0 000 1.414l6 6a.996.996 0 001.414 0 1 1 0 000-1.414L7.414 13H20a1 1 0 100-2z"
      />
    </svg>
  )
}

export default SvgArrowLeft

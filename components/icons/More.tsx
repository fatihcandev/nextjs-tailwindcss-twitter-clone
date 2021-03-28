import * as React from 'react'

function SvgMore(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="22.5"
      height="22.5"
      {...props}
    >
      <g>
        <circle fill="currentColor" cx="5" cy="12" r="2"></circle>
        <circle fill="currentColor" cx="12" cy="12" r="2"></circle>
        <circle fill="currentColor" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  )
}

export default SvgMore

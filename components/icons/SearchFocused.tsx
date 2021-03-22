import * as React from 'react'

function SvgSearchFocused(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="22.5"
      height="22.5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.06 19.94l-3.73-3.73A8.94 8.94 0 0020 11a9 9 0 10-9 9 8.95 8.95 0 005.21-1.67l3.73 3.73c.292.294.676.44 1.06.44s.768-.146 1.06-.44a1.498 1.498 0 000-2.12zM11 17c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6z"
      />
    </svg>
  )
}

export default SvgSearchFocused

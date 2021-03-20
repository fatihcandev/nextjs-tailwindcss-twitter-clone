import * as React from 'react'

function SvgLists(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path
        fill="#fff"
        d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5a.75.75 0 00-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 00.75-.75V4.25a.75.75 0 00-.75-.75H4.25z"
      />
      <path
        fill="#fff"
        d="M17 8.64H7a.75.75 0 010-1.5h10a.75.75 0 110 1.5zm0 4.11H7a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm-5 4.11H7a.75.75 0 110-1.5h5a.75.75 0 010 1.5z"
      />
    </svg>
  )
}

export default SvgLists

import * as React from 'react'

function SvgEmoji(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
      />
      <path
        fill="currentColor"
        d="M12 17.115a5.509 5.509 0 01-4.656-2.544.748.748 0 01.226-1.035.747.747 0 011.036.226 4.02 4.02 0 003.395 1.855 4.024 4.024 0 003.396-1.854.747.747 0 011.036-.225c.35.224.45.688.226 1.036a5.516 5.516 0 01-4.658 2.545L12 17.115zm2.738-6.179a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956zm-5.476 0a1.478 1.478 0 100-2.956 1.478 1.478 0 000 2.956z"
      />
    </svg>
  )
}

export default SvgEmoji

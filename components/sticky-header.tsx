import React from "react"

type Props = {
  title: string
  className?: string
  id?: string
}

function StickyHeader({ title, className, id }: Props) {
  return (
    <div
      className={`sticky-header sticky top-0 z-40 w-full flex-col bg-white text-left text-lg ${className || ""}`}
      id={id}
    >
      <h1 className='sticky top-0 w-full bg-white pb-4 pt-10 text-left text-lg font-semibold lg:pt-20'>
        {title}
      </h1>
    </div>
  )
}

export default StickyHeader

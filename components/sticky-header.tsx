import { className } from "postcss-selector-parser"

type Props = {
  title: string
  className?: string
}

function StickyHeader({ title, className }: Props) {
  return (
    <div
      className={
        "top-0 bg-white sticky top-0 w-full py-4 text-left text-lg pt-24" +
        " " +
        className
      }
    >
      <h1 className={"bg-white sticky top-0 w-full py-4 text-left text-lg"}>
        {title}
      </h1>
    </div>
  )
}

export default StickyHeader

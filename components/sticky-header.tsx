type Props = {
  title: string
  className?: string
}

function StickyHeader({ title, className }: Props) {
  return (
    <div
      className={
        "sticky top-0 z-40 w-full bg-white py-4 pt-24 text-left text-lg" +
        " " +
        className
      }
    >
      <h1 className={"sticky top-0 w-full bg-white py-4 text-left text-lg"}>
        {title}
      </h1>
    </div>
  )
}

export default StickyHeader

import { cn } from "@/lib/utils"
import { press } from "@/data/press"
import PressListItem from "@/components/press-list-item"

type Props = {
  className?: string
}

function PressList({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-col gap-4")}>
      {press.map((item, index) => (
        <div key={index} className={"h-full"}>
          <PressListItem pressData={item} className={"h-full"} />
        </div>
      ))}
    </div>
  )
}

export default PressList

import PressListItem from "@/components/press-list-item"
import { cn } from "@/lib/utils"
import { press } from "@/data/press"

type Props = {
  className?: string
}

function PressList({ className }: Props) {
  return (
    <div className={cn(className, "grid grid-cols-2 gap-4")}>
      {press.map((item, index) => (
        <div key={index} className={"h-full"}>
          <PressListItem pressData={item} className={"h-full"} />
        </div>
      ))}
    </div>
  )
}

export default PressList

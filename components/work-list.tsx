import WorkItem from "@/components/work-item"
import { WorkItems } from "@/data/work"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

function WorkList({ className }: Props) {
  return (
    <div className={cn("flex flex-col gap-y-8 lg:gap-y-0", className)}>
      {WorkItems.map((workItem, index) => (
        <WorkItem key={index} details={workItem} />
      ))}
    </div>
  )
}

export default WorkList

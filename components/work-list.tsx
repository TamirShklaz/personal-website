import WorkItem from "@/components/work-item"
import { WorkItems } from "@/data/work"

type Props = {
  className?: string
}

function WorkList({ className }: Props) {
  return (
    <div className={className}>
      {WorkItems.map((workItem, index) => (
        <WorkItem key={index} details={workItem} />
      ))}
    </div>
  )
}

export default WorkList

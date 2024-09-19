import { cn } from "@/lib/utils"
import { WorkItemType } from "@/types/work-item.types"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"
import React from "react"

type Props = {
  className?: string
  details: WorkItemType
}

function WorkItem({ className, details }: Props) {
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLElement &&
      (e.target.closest("button") || e.target.closest("a"))
    ) {
      return
    }
    if (details.url) {
      window.open(details.url, "_blank")
    }
  }

  return (
    <div
      className={cn(
        className,
        "group flex cursor-pointer flex-row gap-4 rounded-2xl p-6 transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      )}
      onClick={handleCardClick}
    >
      <div className={"min-w-[90px]"}>
        <span>{details.dates}</span>
      </div>
      <div className={"flex-1 space-y-3"}>
        <h3 className={"mb-1 text-xl"}>
          {details.role} | {details.company}
        </h3>
        <span className={"text-sm text-slate-600"}>
          {details.companyDescription}
        </span>
        <ul className={"list-disc space-y-2 pl-4"}>
          {details.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <div className={"flex flex-row flex-wrap gap-x-2"}>
          {details.links?.map((link, index) => (
            <Button
              variant={"link"}
              key={index}
              size={"sm"}
              asChild
              className='hover:bg-primary/2 group-hover:bg-transparent'
            >
              <a
                className={"space-2 flex flex-row gap-2"}
                target={"_blank"}
                href={link.url}
                rel='noreferrer'
              >
                <div>
                  {link.icon ? link.icon : <Link className={"h-4 w-4"} />}
                </div>
                <span> {link.label}</span>
              </a>
            </Button>
          ))}
        </div>
        <div className={"flex flex-row flex-wrap gap-2"}>
          {details.tags.map((tag, index) => (
            <div
              className={
                "flex flex-row items-center gap-1 rounded-2xl bg-gray-200 px-3 py-1 text-sm"
              }
              key={index}
            >
              {React.cloneElement(tag.icon as React.ReactElement, {
                className: "w-4 h-4",
              })}
              <span>{tag.technology}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkItem

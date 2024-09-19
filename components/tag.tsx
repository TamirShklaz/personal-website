import { cn } from "@/lib/utils"
import React from "react"

type Props = {
  className?: string
  icon: string | React.ReactNode
  text: string
}

function Tag({ className, text, icon }: Props) {
  return (
    <div className={cn(className)}>
      <div
        className={
          "flex flex-row items-center gap-1 rounded-2xl bg-gray-200 px-3 py-1 text-sm"
        }
      >
        {typeof icon === "string" ? (
          <img
            src={icon}
            className={"h-3 w-3 fill-black object-contain font-black"}
          />
        ) : (
          <div>
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-4 h-4",
            })}
          </div>
        )}
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Tag

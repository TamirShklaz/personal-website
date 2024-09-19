import { cn } from "@/lib/utils"
import Image from "next/image"
import { PressType } from "@/data/press"
import { SquareArrowOutUpRight } from "lucide-react"
import Tag from "@/components/tag"

type Props = {
  className?: string
  pressData: PressType
}

function PressGridItem({ className, pressData }: Props) {
  return (
    <a
      className={cn(className)}
      href={pressData.url}
      target={"_blank"}
      rel='noreferrer'
    >
      <div
        className={
          "group relative flex cursor-pointer flex-row items-start justify-start gap-4 rounded-xl p-6 transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        }
      >
        <Image
          className={"h-[90px] w-[90px] min-w-[90px] rounded-2xl object-cover"}
          alt={"forbes_30_u_30"}
          src={pressData.imageUrl}
          width={90}
          height={90}
        />
        <div className={"flex flex-col gap-y-2"}>
          <h3 className={"text-xl font-semibold"}>{pressData.title}</h3>
          {pressData.tag && (
            <Tag
              text={pressData.tag.text}
              icon={pressData.tag.icon}
              className={"w-fit"}
            />
          )}
          <p className={"text-muted-foreground"}>{pressData.description}</p>
        </div>
        <SquareArrowOutUpRight
          className={"absolute bottom-4 right-4 h-4 w-4 self-end"}
        />
      </div>
    </a>
  )
}

export default PressGridItem

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
          "group relative flex cursor-pointer items-start justify-start gap-4 rounded-xl p-2 transition-colors hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:flex-row lg:p-6"
        }
      >
        <Image
          className={
            "h-[64px] w-[64px] rounded-2xl object-cover lg:h-[90px] lg:w-[90px] lg:min-w-[90px]"
          }
          alt={"forbes_30_u_30"}
          src={pressData.imageUrl}
          width={90}
          height={90}
        />
        <div className={"flex flex-col gap-y-2"}>
          <h3 className={"font-semibold lg:text-xl"}>{pressData.title}</h3>
          {pressData.tag && (
            <Tag
              text={pressData.tag.text}
              icon={pressData.tag.icon}
              className={"w-fit"}
            />
          )}
          {/*<p className={"text-sm text-muted-foreground"}>*/}
          {/*  {pressData.description}*/}
          {/*</p>*/}
        </div>
        <SquareArrowOutUpRight
          className={"absolute bottom-4 right-4 h-4 w-4 self-end"}
        />
      </div>
    </a>
  )
}

export default PressGridItem

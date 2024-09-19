import { cn } from "@/lib/utils"
import Image from "next/image"
import { SquareArrowOutUpRight } from "lucide-react"
import { PressType } from "@/data/press"
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
          "relative flex h-full flex-col items-start gap-y-2 rounded-2xl border-2 p-4 transition-colors hover:bg-primary/5"
        }
      >
        <Image
          className={"h-[300px] w-auto rounded-2xl object-cover"}
          alt={"forbes_30_u_30"}
          src={pressData.imageUrl}
          width={256}
          height={256}
        />
        {pressData.tag && (
          <Tag text={pressData.tag.text} icon={pressData.tag.icon} />
        )}
        <h3 className={"text-xl font-semibold"}>{pressData.title}</h3>
        <SquareArrowOutUpRight
          className={"absolute bottom-4 right-4 h-4 w-4 self-end"}
        />
      </div>
    </a>
  )
}

export default PressGridItem

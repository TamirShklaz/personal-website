import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = { className?: string }

function Footer({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-col text-sm")}>
      <a
        href={"https://github.com/TamirShklaz/personal-website"}
        target={"_blank"}
        rel='noreferrer'
      >
        <Button variant={"link"} size={"sm"} className={"pl-0"}>
          View source on GitHub
        </Button>
      </a>
      <a
        href={"https://brittanychiang.com/"}
        target={"_blank"}
        rel='noreferrer'
      >
        <Button variant={"link"} size={"sm"} className={"pl-0"}>
          Design inspired by
        </Button>
      </a>
    </div>
  )
}

export default Footer

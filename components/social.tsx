import { cn } from "@/lib/utils"
import { Github, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = { className?: string }

function Social({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-row items-start space-x-2")}>
      <Button size={"icon"}>
        <Github />
      </Button>
      <Button size={"icon"}>
        <Linkedin />
      </Button>
      <Button size={"icon"}>
        <Instagram />
      </Button>
    </div>
  )
}

export default Social

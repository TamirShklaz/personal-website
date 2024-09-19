import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons"

type Props = { className?: string }

function Social({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-row items-start space-x-2")}>
      <Button size={"icon"}>
        <SiGithub />
      </Button>
      <Button size={"icon"}>
        <SiLinkedin />
      </Button>
      <Button size={"icon"}>
        <SiInstagram />
      </Button>
    </div>
  )
}

export default Social

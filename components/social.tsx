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
      <a
        href={"https://github.com/TamirShklaz"}
        target={"_blank"}
        rel='noreferrer'
      >
        <Button size={"icon"} variant={"outline"}>
          <SiGithub />
        </Button>
      </a>
      <a
        target={"_blank"}
        href={"https://www.linkedin.com/in/tamir-shklaz/"}
        rel='noreferrer'
      >
        <Button size={"icon"} variant={"outline"}>
          <SiLinkedin />
        </Button>
      </a>

      <a
        target={"_blank"}
        href={"https://www.instagram.com/tamirshklaz/"}
        rel='noreferrer'
      >
        <Button size={"icon"} variant={"outline"}>
          <SiInstagram />
        </Button>
      </a>
    </div>
  )
}

export default Social

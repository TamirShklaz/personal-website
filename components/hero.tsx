import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = { className?: string }

function Hero({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-col items-start")}>
      <h1 className={"text-4xl font-bold"}>Tamir Shklaz</h1>
      <h2 className={"mt-3 text-lg"}>I build products fast.</h2>
      <p className={"mt-4"}>
        I’m 3x startup founder (ex YC) and full-stack engineer with 6+ of
        experience and a proven track record of building products from 0-1 that
        scale to millions of users.
      </p>

      <div className={"mt-4 flex flex-col items-start gap-y-2 py-4"}>
        <Button className={"text-lg"} size={"lg"}>
          Work with me
        </Button>
        <div
          className={
            "flex flex-row items-center rounded-3xl border-[1px] border-gray-300 px-3 py-1 text-slate-500"
          }
        >
          <div className='mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500'></div>
          <span className={"text-xs"}> Available for work</span>
        </div>
      </div>
    </div>
  )
}

export default Hero

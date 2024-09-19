import { cn } from "@/lib/utils"

type Props = {
  className?: string
  activeSection: string
  onSectionClick: (section: string) => void
}

function HomeNav({ className, activeSection, onSectionClick }: Props) {
  const sections = ["about", "work", "press"]

  return (
    <ul className={"flex flex-col " + className}>
      {sections.map(section => (
        <li id={section} key={section}>
          <a
            onClick={() => onSectionClick(section)}
            className={"group mr-4 flex items-center py-3"}
          >
            <span
              className={cn(
                "mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
                section === activeSection && "w-16 bg-slate-800",
              )}
            ></span>
            <span
              className={cn(
                "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200",
                section === activeSection && "text-slate-800",
              )}
            >
              {section.toUpperCase()}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default HomeNav

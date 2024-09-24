import { cn } from "@/lib/utils"

type Props = { className?: string }

function About({ className }: Props) {
  return (
    <div className={cn(className, "flex flex-col gap-y-4 text-lg")}>
      <p>
        I love building products. I get incredible joy from going from idea to
        reality and seeing the tangible impact of what I build on people’s
        lives. As a founder of three startups, I’ve been hands-on with every
        part of the process—from user research and design to strategy, copy, and
        engineering.
      </p>
      <p>That’s me on the professional side.</p>
      <p>
        Personally, I’m obsessed with growth and learning. I’m always asking
        myself how I can do something better and how to push the limits of my
        comfort zone. If I’m not coding, you’ll likely find me rock climbing,
        bachata dancing, or teaching yoga 🧘
      </p>
      <p>
        At my core, I’m driven by a mission to help others lead lives truly
        worth living. To me, a meaningful life comes down to three key pillars:
        <ol className={"mt-4"}>
          <li>1. Physical health and well-being</li>
          <li>2. Financial security and freedom</li>
          <li>3. A mindset that’s both content and joyful</li>
        </ol>
      </p>
      <p>
        That’s why I’ve dedicated my career to building impactful products in
        education and healthcare.
      </p>
    </div>
  )
}

export default About

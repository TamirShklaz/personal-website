"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import WorkList from "@/components/work-list"
import StickyHeader from "@/components/sticky-header"
import { createRef, useEffect, useState } from "react"
import ProjectList from "@/components/project-list"
import PressList from "@/components/press-list"
import HomeNav from "@/components/home-nav"
import Social from "@/components/social"

export default function Home() {
  const refs = [
    { id: "about", ref: createRef<HTMLDivElement>() },
    { id: "work", ref: createRef<HTMLDivElement>() },
    { id: "projects", ref: createRef<HTMLDivElement>() },
    { id: "press", ref: createRef<HTMLDivElement>() },
  ]

  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      },
    )

    refs.forEach(refObj => {
      if (refObj.ref.current) {
        observer.observe(refObj.ref.current)
      }
    })

    return () => {
      refs.forEach(refObj => {
        if (refObj.ref.current) {
          observer.unobserve(refObj.ref.current)
        }
      })
    }
  }, [])

  const onSectionClick = (section: string) => {
    refs
      .find(refObj => refObj.id === section)
      ?.ref.current?.scrollIntoView({
        behavior: "smooth",
      })
  }

  return (
    <main
      className={
        "mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0"
      }
    >
      <div className={"lg:flex lg:justify-between lg:gap-4"}>
        <div
          className={
            "justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24"
          }
        >
          <div>
            <Hero />

            <HomeNav
              className={"mt-10"}
              activeSection={activeSection}
              onSectionClick={onSectionClick}
            />
          </div>

          <Social />
        </div>
        <div className={"relative pt-24 lg:w-1/2 lg:py-24"}>
          <StickyHeader title={"About"} className={"-mt-24"} />
          <div ref={refs[0].ref} id={"about"} />
          <About className={"min-h-screen"} />

          <StickyHeader title={"Work"} />
          <div ref={refs[1].ref} id={"work"} />
          <WorkList className={"min-h-screen"} />

          <StickyHeader title={"Projects"} />
          <div ref={refs[2].ref} id={"projects"} />
          <ProjectList className={"min-h-screen"} />

          <StickyHeader title={"Press"} />
          <div ref={refs[3].ref} id={"press"} />
          <PressList className={"min-h-screen"} />
        </div>
      </div>
    </main>
  )
}

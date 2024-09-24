"use client"

import Hero from "@/components/hero"
import About from "@/components/about"
import WorkList from "@/components/work-list"
import StickyHeader from "@/components/sticky-header"
import { createRef, useEffect, useRef, useState } from "react"
import PressList from "@/components/press-list"
import HomeNav from "@/components/home-nav"
import Social from "@/components/social"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function Home() {
  const sectionRefs = [
    { id: "about", ref: createRef<HTMLDivElement>() },
    { id: "work", ref: createRef<HTMLDivElement>() },
    { id: "press", ref: createRef<HTMLDivElement>() },
  ]

  const [activeSection, setActiveSection] = useState("about")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-1px 0px 0px 0px",
      threshold: [0, 0.1, 0.5, 1],
    }

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sectionRefs.forEach(section => {
      if (section.ref.current) {
        observerRef.current?.observe(section.ref.current)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const onSectionClick = (section: string) => {
    const ref = sectionRefs.find(refObj => refObj.id === section)
    ref?.ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <main className='mx-auto mt-10 min-h-screen max-w-screen-xl px-4 font-sans md:px-12 md:py-20 lg:mt-0 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-8'>
        <div className='justify-between lg:sticky lg:top-20 lg:flex lg:max-h-screen lg:w-4/12 lg:flex-col'>
          <div>
            <Hero />
            <HomeNav
              className='mt-10'
              activeSection={activeSection}
              onSectionClick={onSectionClick}
            />
          </div>
          <div className={"lg:mb-36"}>
            <Social className='mt-10' />
            <Footer className={"mt-4"} />
          </div>
        </div>
        <div className='mb-20 lg:w-7/12'>
          <div ref={sectionRefs[0].ref} id='about'>
            <StickyHeader title='About' className='sticky-header' />
            <About />
          </div>

          <div ref={sectionRefs[1].ref} id='work'>
            <StickyHeader title='Work' className='sticky-header' />
            <WorkList />
            <a href='/resume.pdf' target='_blank' rel='noreferrer'>
              <Button variant='outline' className='mt-4'>
                View Full Resume
              </Button>
            </a>
          </div>

          <div ref={sectionRefs[2].ref} id='press' className={"mb-80"}>
            <StickyHeader title='Press' className='sticky-header' />
            <PressList />
          </div>
        </div>
      </div>
    </main>
  )
}

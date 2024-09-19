import { SiTechcrunch } from "@icons-pack/react-simple-icons"

export type PressType = {
  title: string
  imageUrl: string
  description: string
  url: string
  tag?: {
    text: string
    icon: string | React.ReactNode
  }
}

export const press: PressType[] = [
  {
    title: "Tamir Shklaz Named to Forbes 30 Under 30 Asia",
    imageUrl: "/forbes_cover.png",
    description: "Forbes 30 Under 30",
    url: "https://www.forbes.com/profile/strive/",
    tag: {
      text: "Forbes",
      icon: "/logos/forbes.svg",
    },
  },
  {
    title: "Strive raises $1.3M to show kids that coding is fun",
    description: "TechCrunch",
    imageUrl: "/tech_crunch_article_cover.webp",
    url: "https://techcrunch.com/2023/02/20/strive/?guccounter=1",
    tag: {
      text: "TechCrunch",
      icon: <SiTechcrunch />,
    },
  },
  {
    title:
      "How I'm Creating A World-Class Book Exchange Business, While Still Studying",
    description: "TechCrunch",
    imageUrl: "/heavy_chef_cover.jpg",
    url: "https://youtu.be/Q57S9ZY2ok0?si=lpoSj_i36et-Xjl5",
    tag: {
      text: "HeavyChef",
      icon: "/logos/hc.svg",
    },
  },
  {
    title: "Mobile app to buy and sell textbooks cheaper - Tamir Shklaz",
    description: "TechCrunch",
    imageUrl: "/sabc_cover.jpg",
    url: "https://youtu.be/dsvzHMeLjJM?si=MtPhtNurSoz_1K27",
    tag: {
      text: "SABC News",
      icon: "/logos/sabc.svg",
    },
  },
]

import { WorkItemType } from "@/types/work-item.types"
import {
  SiAndroid,
  SiAngular,
  SiFirebase,
  SiGraphql,
  SiIonic,
  SiIos,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTechcrunch,
  SiTypescript,
  SiWebflow,
} from "@icons-pack/react-simple-icons"

export const WorkItems: WorkItemType[] = [
  {
    company: "Strive Math (YC S21)",
    url: "https://www.strivemath.com",
    dates: "2020 - 2023",
    role: "Founder & CTO",
    activities: [
      "Built a browser-based IDE specialised for coding education with real-time collaboration.",
      "Led the design, strategy and engineering of our landing page.",
      "Led a team of 4 engineers to build our back-office infrastructure for payments, scheduling, communication and payroll. ",
    ],
    tags: [
      { technology: "React", icon: <SiReact /> },
      { technology: "TypeScript", icon: <SiTypescript /> },
      { technology: "NodeJS", icon: <SiNodedotjs /> },
      { technology: "PostgreSQL", icon: <SiPostgresql /> },
      { technology: "Webflow", icon: <SiWebflow /> },
    ],
    links: [
      {
        label: "TechCurnch",
        url: "https://techcrunch.com/2023/02/20/strive/",
        icon: <SiTechcrunch />,
      },
      {
        label: "Forbes",
        url: "https://www.forbes.com/profile/strive/ ",
      },
    ],
    companyDescription:
      "Online coding school teaching kids math through code. ",
  },
  {
    dates: "2020",
    company: "Insupply",
    role: "Founder & CEO/CTO",
    companyDescription:
      "Marketplace for trusted buyers and supplies of PPE equipment during COVID-19 pandemic.",
    activities: [
      "Created Coronapp, an information repository web app regarding COVID-19 in South Africa. Had 1M+ daily users",
      "Set up a two-sided marketplace in < 1 month, listed 50M+ items of PPE, and received requests for more than 100M items of PPE ($1Bn in value) in < 6 months.  ",
    ],
    tags: [
      { technology: "React", icon: <SiReact /> },
      { technology: "NestJS", icon: <SiNestjs /> },
      { technology: "PostgreSQL", icon: <SiPostgresql /> },
      { technology: "Angular", icon: <SiAngular /> },
    ],
    links: [
      {
        label: "Mail & Guardian",
        url: "https://mg.co.za/article/2020-03-24-coronapp-is-a-new-online-platform-for-accessing-accurate-information-about-covid-19/ ",
      },
      {
        label: "TimesLive",
        url: "https://www.linkedin.com/posts/tamir-shklaz_youth-youthday-ppe-activity-6678678322618085377-vTjT/?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    dates: "2018-2020",
    company: "Quillo",
    role: "Founder & CEO/CTO",
    companyDescription: "Online marketplace for 2nd hand university textbooks.",
    activities: [
      "Created a nation wide delivery and escrow system transacting >5000 books",
      "Built native apps for iOS and Android",
      "Led marketing & growth, >32,000 students across 24 universities\n",
    ],
    tags: [
      { technology: "Angular", icon: <SiAngular /> },
      { technology: "Ionic", icon: <SiIonic /> },
      { technology: "Firebase", icon: <SiFirebase /> },
      { technology: "GraphQL", icon: <SiGraphql /> },
      { technology: "Java", icon: <SiAndroid /> },
      { technology: "Swift", icon: <SiIos /> },
    ],
    links: [
      {
        label: "SABC News",
        url: "https://www.youtube.com/watch?v=dsvzHMeLjJM&ab_channel=SABCNews",
      },
      {
        label: "Live Pitch",
        url: "https://www.youtube.com/watch?v=Q57S9ZY2ok0&ab_channel=HeavyChef",
      },
    ],
  },
]

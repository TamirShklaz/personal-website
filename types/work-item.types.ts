export type WorkItemType = {
  company: string
  companyDescription: string
  role: string
  activities: string[]
  tags: { technology: string; icon?: React.ReactNode }[]
  links?: { label: string; url: string; icon?: React.ReactNode }[]
  dates: string
  url?: string
}

export interface Root {
  categories: Category[]
  labels: Label[]
  cryptos: Crypto[]
  criterions: Criterion[]
  companyTypes: CompanyType[]
  companies: Company[]
  projects: Project[]
}

export interface Category {
  id: number
  name: string
  color: string
}

export interface Label {
  id: number
  name: string
}

export interface Crypto {
  id: number
  name: string
}

export interface Criterion {
  id: number
  categoryID: number
  media: Media
  name: string
  description: string
}

export interface Media {
  url: string
  alt: string
}

export interface CompanyType {
  id: number
  name: string
}

export interface Company {
  id: number
  companyName: string
  companyTypeID: number
  address: string
}

export interface Project {
  id: number
  projectName: string
  description: string
  medias: Media[]
  address: string
  companyID: number
  crowdfunding: boolean
  categoriesID: number[]
  labelsID: number[]
  cryptosID: number[]
  companyTypeID: number
  projectManagers: ProjectManager[]
}

export interface ProjectManager {
  firstName: string
  lastName: string
  role: string
}

import { IconType } from 'react-icons'

export interface IShippingList {
  id: number
  label: string
}

export interface ICalculationList {
  id: number
  label: string
}

export interface IAboutProductImages {
  id: number
  img: string
}

export interface IAboutBenefitsGrid {
  id: number
  IconTag: IconType
  label: string
  description: string
}

interface ITags {
  id: number
  label: string
}

interface IUserHasRight {
  id: number
  text: string
}

export interface IAllVacancy {
  id: number
  title: string
  tags: ITags[]
  responsibilities: ITags[]
  requirements: ITags[]
  terms: ITags[]
}

export interface ITextData {
  shippingList: IShippingList[]
  calculationList: ICalculationList[]
  aboutProductImages: IAboutProductImages[]
  aboutBenefitsGrid: IAboutBenefitsGrid[]
  soglashenie: {
    userHasRight: IUserHasRight[]
    adminHasRight: IUserHasRight[]
    userUndertakes: IUserHasRight[]
    adminUndertakes: IUserHasRight[]
    responsibilityParties: IUserHasRight[]
  }
  allVacancy: IAllVacancy[]
}

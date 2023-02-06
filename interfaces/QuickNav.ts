export interface QuickNavInterface {
  sections: QuickNavSectionInterface[]
}

export interface QuickNavSectionInterface {
  title: string
  href?: string
  children?: QuickNavSectionInterface[]
}

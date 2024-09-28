export interface Root {
  ToolsType: Tool[]
}

export interface ToolsType {
  section_name: string
  subsections: Subsection[]
}

export interface Subsection {
  subsection_name: string
  Categories: Category[]
}

export interface Category {
  category_name: string
  items: Item[]
}

export interface Item {
  name: string
  Description?: string
  Url?: string
  Technologies?: string[]
  Free?: boolean | string
}

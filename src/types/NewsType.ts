export interface NewsPageType {
  title: string
  headlines: ArticleCardHeadlineType[]
  recents: ArticleCardListType[]
}

export interface ArticleCardHeadlineType {
  id?: number
  title: string
  short_desc: string
  path: string
  date: string
  image: string
}

export interface ArticleHeadlineSliderType {
  id?: number
  headlines: ArticleCardHeadlineType[]
}

export interface ArticleCardListType {
  id?: number
  title: string
  short_desc: string
  path: string
  date: string
  image: string
}

export interface ArticleCardSliderType {
  id?: number
  articles: ArticleCardListType[]
}

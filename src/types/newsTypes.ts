export interface IAllNews {
  id: number
  img: string
  title: string
  postDate: string
  postTag: string
  category: 'all' | 'articles'
  postText: string
  more: boolean
}

export interface INewsState {
  allNews: IAllNews[]
}
import React from "react"
import NewsPage from "@/components/pages/NewsPage"

const data = {
  title: "News",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  headlines: [
    {
      title: "Headline 1",
      date: "2021-09-01",
      short_desc: "Short description 1",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      title: "Headline 2",
      date: "2021-09-02",
      short_desc: "Short description 2",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
  ],
  recents: [
    {
      id: 1,
      title: "Headline 1",
      date: "2021-09-01",
      short_desc: "Short description 1",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 2,
      title: "Headline 2",
      date: "2021-09-02",
      short_desc: "Short description 2",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 3,
      title: "Headline 3",
      date: "2021-09-03",
      short_desc: "Short description 3",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
  ],
}

export default function News() {
  return (
    <>
      <NewsPage
        title={data.title}
        headlines={data.headlines}
        recents={data.recents}
      />
    </>
  )
}

import React from "react"
import NewsDetailPage from "@/components/pages/NewsDetailPage"

async function getNews(slug: string) {
  const res = await fetch(`http://localhost:8002/v1/news/${slug}`)
  if (!res.ok) {
    throw new Error("Failed to fetch News data.")
  }
  return res.json()
}

export default async function NewsDetail({
  params,
}: {
  params: { slug: string }
}) {
  const fetch = await getNews(params.slug)

  return (
    <>
      <NewsDetailPage
        title={fetch.data.title}
        author={fetch.data.author}
        date={fetch.data.date}
        content={fetch.data.content}
      />
    </>
  )
}

import React from "react"
import NewsDetailPage from "@/components/pages/NewsDetailPage"

async function getNews(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/news/${slug}`,
    {
      cache: "no-cache",
    }
  )
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

  console.log("image: ", fetch.data.images)

  return (
    <>
      <NewsDetailPage
        title={fetch.data.title}
        author={fetch.data.author}
        date={fetch.data.date}
        content={fetch.data.content}
        image={fetch.data.images}
      />
    </>
  )
}

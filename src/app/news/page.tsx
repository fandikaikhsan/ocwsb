import React from "react"
import NewsPage from "@/components/pages/NewsPage"

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/news`, {
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch News data.")
  }
  return res.json()
}

export default async function News() {
  const fetch = await getNews()

  return (
    <>
      <NewsPage
        title={fetch.data.title}
        headlines={fetch.data.headlines}
        recents={fetch.data.recents}
      />
    </>
  )
}

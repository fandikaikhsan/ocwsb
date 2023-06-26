import OurHistoryPage from "@/components/pages/OurHistoryPage"

async function getValue() {
  const res = await fetch("http://localhost:8002/v1/history")
  if (!res.ok) {
    throw new Error("Failed to fetch Value data.")
  }
  return res.json()
}

export default async function OurValue() {
  const fetch = await getValue()
  return (
    <>
      <OurHistoryPage title={fetch.data.title} history={fetch.data.history} />
    </>
  )
}
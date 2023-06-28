import OurValuePage from "@/components/pages/OurValuePage"

async function getValue() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/value`)
  if (!res.ok) {
    throw new Error("Failed to fetch Value data.")
  }
  return res.json()
}

export default async function OurValue() {
  const fetch = await getValue()
  return (
    <>
      <OurValuePage
        title={fetch.data.title}
        description={fetch.data.description}
        values={fetch.data.values}
      />
    </>
  )
}

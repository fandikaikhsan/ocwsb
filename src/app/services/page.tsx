import ServicesPage from "@/components/pages/ServicesPage"

async function getService() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/service`, {
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Service data.")
  }
  return res.json()
}

export default async function Services() {
  const fetch = await getService()

  return (
    <>
      <ServicesPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        services={fetch.data.services}
        video={fetch.data.video}
      />
    </>
  )
}

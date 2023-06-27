import ServiceDetailPage from "@/components/pages/ServiceDetailPage"

async function getServiceDetail(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/service/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch Service data.")
  }
  return res.json()
}

export default async function ServiceDetail({
  params,
}: {
  params: { id: string }
}) {
  const fetch = await getServiceDetail(params.id)
  return (
    <>
      <ServiceDetailPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.short_desc}
        image={fetch.data.image}
        specification={fetch.data.specification}
      />
    </>
  )
}

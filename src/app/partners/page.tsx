import PartnersPage from "@/components/pages/PartnersPage"

async function getPartner() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/partner`, {
    next: { revalidate: 5 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Partner data.")
  }

  return res.json()
}

export default async function Partners() {
  const fetch = await getPartner()

  return (
    <>
      <PartnersPage
        title={fetch.data.title}
        description={fetch.data.description}
        partners={fetch.data.partners}
      />
    </>
  )
}

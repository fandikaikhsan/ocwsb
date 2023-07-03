import CompanyPage from "@/components/pages/CompanyPage"

async function getCompany() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/company`, {
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Company data.")
  }
  return res.json()
}

export default async function Company() {
  const fetch = await getCompany()
  return (
    <CompanyPage
      title={fetch.data.title}
      description={fetch.data.description}
      video={fetch.data.video}
      portofolios={fetch.data.portofolios}
    />
  )
}

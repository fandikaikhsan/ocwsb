import CertificationPage from "@/components/pages/CertificationPage"

async function getCertification() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/certification`,
    {
      next: { revalidate: 5 },
    }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch Certification data.")
  }

  return res.json()
}

export default async function Certification() {
  const fetch = await getCertification()

  return (
    <CertificationPage
      title={fetch.data.title}
      description={fetch.data.description}
      certifications={fetch.data.certifications}
    />
  )
}

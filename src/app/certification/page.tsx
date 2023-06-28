import CertificationPage from "@/components/pages/CertificationPage"

const data = {
  title: "OUR CERTIFICATION",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  certifications: [
    {
      id: 1,
      name: "ISO 9001:2015",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "ISO 27001:2013",
      image: "https://picsum.photos/200/300",
    },
  ],
}

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

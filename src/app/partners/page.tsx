import PartnersPage from "@/components/pages/PartnersPage"

const data = {
  title: "Partners",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  partners: [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 2,
      name: "Consectetur adipiscing elit.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
  ],
}

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

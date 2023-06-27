import CompanyPage from "@/components/pages/CompanyPage"

const data = {
  title: "OUR COMPANY",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  video: "https://www.youtube.com/embed/tgbNymZ7vqY",
  portofolios: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos natus soluta rerum omnis sequi quia quis eligendi, quasi quam odit sunt tempore! Magnam, quis minima quae voluptatem ipsa repellat!",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Consectetur adipiscing elit.",
      short_desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos natus soluta rerum omnis sequi quia quis eligendi, quasi quam odit sunt tempore! Magnam, quis minima quae voluptatem ipsa repellat!",
      image: "https://picsum.photos/200/300",
    },
  ],
}

async function getCompany() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_KEY}/v1/company`)
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

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

export default function Company() {
  return (
    <CompanyPage
      title={data.title}
      description={data.description}
      video={data.video}
      portofolios={data.portofolios}
    />
  )
}

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

export default function Partners() {
  return (
    <>
      <PartnersPage
        title={data.title}
        description={data.description}
        partners={data.partners}
      />
    </>
  )
}

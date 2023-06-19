import OurValuePage from "@/components/pages/OurValuePage"

const data = {
  title: "OUR VALUE",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  values: [
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

export default function OurValue() {
  return (
    <>
      <OurValuePage
        title={data.title}
        description={data.description}
        values={data.values}
      />
    </>
  )
}

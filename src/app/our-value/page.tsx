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

async function getValue() {
  const res = await fetch("http://localhost:8002/v1/value")
  if (!res.ok) {
    throw new Error("Failed to fetch Value data.")
  }
  return res.json()
}

export default async function OurValue() {
  const fetch = await getValue()
  return (
    <>
      <OurValuePage
        title={fetch.data.title}
        description={fetch.data.description}
        values={fetch.data.values}
      />
    </>
  )
}

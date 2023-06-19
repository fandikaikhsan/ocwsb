import ProductsPage from "@/components/pages/ProductsPage"

const data = {
  title: "Services",
  short_desc:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  description:
    "In cooperation with Rheinmetall Air Defence, Switzerland as the main Principal, work towards localizing production activities for military equipment in the form of Assembly, Maintenance, Repair, Overhaul, Training, and local spare parts sourcing.",
  video: {
    title: "Delighted Service",
    url: "https://www.youtube.com/embed/1GSq7Je32iw",
  },
  services: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 2,
      title: "Consectetur adipiscing elit.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
      path: "/",
    },
  ],
}

export default function Services() {
  return (
    <>
      <ProductsPage
        title={data.title}
        short_desc={data.short_desc}
        description={data.description}
        products={data.services}
        video={data.video}
      />
    </>
  )
}

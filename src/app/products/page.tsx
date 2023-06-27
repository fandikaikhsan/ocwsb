import ProductsPage from "@/components/pages/ProductsPage"

const data = {
  title: "Products",
  short_desc:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  description:
    "In cooperation with Rheinmetall Air Defence, Switzerland as the main Principal, work towards localizing production activities for military equipment in the form of Assembly, Maintenance, Repair, Overhaul, Training, and local spare parts sourcing.",
  video: {
    title: "Manufacturing Process",
    url: "https://www.youtube.com/embed/1GSq7Je32iw",
  },
  products: [
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

async function getProduct() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_KEY}/v1/product`, {
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch Product data.")
  }
  return res.json()
}

export default async function Products() {
  const fetch = await getProduct()
  return (
    <>
      <ProductsPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        products={fetch.data.products}
        video={fetch.data.video}
      />
    </>
  )
}

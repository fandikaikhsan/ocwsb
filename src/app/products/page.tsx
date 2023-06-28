import ProductsPage from "@/components/pages/ProductsPage"

async function getProduct() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/product`, {
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

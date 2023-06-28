import ProductDetailPage from "@/components/pages/ProductDetailPage"

async function getProductDetail(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/product/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch Product data.")
  }
  return res.json()
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string }
}) {
  const fetch = await getProductDetail(params.id)
  return (
    <>
      <ProductDetailPage
        title={fetch.data.title}
        short_desc={fetch.data.short_desc}
        description={fetch.data.description}
        image={fetch.data.image}
        specification={fetch.data.spesification}
      />
    </>
  )
}

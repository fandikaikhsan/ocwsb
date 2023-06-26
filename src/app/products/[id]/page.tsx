import ProductDetailPage from "@/components/pages/ProductDetailPage"

const data = {
  title: "Product 1",
  short_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda illum aliquam quos amet adipisci qui pariatur, hic porro mollitia itaque veritatis ipsum culpa possimus numquam eius. Veniam, mollitia neque!",
  specification:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda illum aliquam quos amet adipisci qui pariatur, hic porro mollitia itaque veritatis ipsum culpa possimus numquam eius. Veniam, mollitia neque!",
  image: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      image: "https://picsum.photos/200/300",
    },
  ],
}

export default function ProductDetail() {
  return (
    <>
      <ProductDetailPage
        title={data.title}
        short_desc={data.short_desc}
        description={data.short_desc}
        image={data.image}
        specification={data.specification}
      />
    </>
  )
}

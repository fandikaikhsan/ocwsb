import ContactUsPage from "@/components/pages/ContactUsPage"

async function getContactUs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/contact`)
  if (!res.ok) {
    throw new Error("Failed to fetch Contact Us data.")
  }
  return res.json()
}

export default async function ContactUs() {
  const fetch = await getContactUs()
  return (
    <>
      <ContactUsPage
        title={fetch.data.title}
        description={fetch.data.description}
        body={fetch.data.body}
        cta_banner={fetch.data.cta_banner}
      />
    </>
  )
}

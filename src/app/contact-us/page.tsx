import ContactUsPage from "@/components/pages/ContactUsPage"

const data = {
  title: "CONTACT US",
  description:
    "In cooperation with Rheinmetall Air Defence, Switzerland as the main Principal, work towards localizing production activities for military equipment in the form of Assembly, Maintenance, Repair, Overhaul, Training, and local spare parts sourcing.",
  body: {
    office_address:
      "Jalan Selayar VI Blok K21 Kawasan Industri MM2100 Desa Telajung Kecamatan Cikarang Barat Kabupaten Bekasi – Jawa Barat (17530)",
    workshop_address:
      "Rukan Puri Kencana Blok L6 No: 88P Jl. Kencana Utama II, Kel. Kembangan Selatan Kec. Kembangan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta (11610)",
    phone: "(021) – 58303738",
    email: "ocwsb.pratama.indonesia@gmail.com",
  },
  cta_banner: {
    title: "LET'S TALK!",
    image: "https://picsum.photos/200/300",
    button_text: "CONTACT US",
    path: "/contact-us",
  },
}

export default function ContactUs() {
  return (
    <>
      <ContactUsPage
        title={data.title}
        description={data.description}
        body={data.body}
        cta_banner={data.cta_banner}
      />
    </>
  )
}

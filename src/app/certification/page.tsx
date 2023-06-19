import CertificationPage from "@/components/pages/CertificationPage"

const data = {
  title: "OUR CERTIFICATION",
  description:
    "We engaged in assembly, integration, tests, maintenance, training, and other services in the defence industry.",
  certifications: [
    {
      id: 1,
      name: "ISO 9001:2015",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "ISO 14001:2015",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "ISO 45001:2018",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "ISO 27001:2013",
      image: "https://picsum.photos/200/300",
    },
  ],
}

export default function Certification() {
  return (
    <CertificationPage
      title={data.title}
      description={data.description}
      certifications={data.certifications}
    />
  )
}

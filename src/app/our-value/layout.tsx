import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Value",
  description: "Our Value Page",
}

export default function NewsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  )
}

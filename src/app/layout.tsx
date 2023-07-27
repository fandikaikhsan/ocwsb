import { NextIntlClientProvider } from "next-intl"
import { Metadata } from "next"
import "../styles/globals.css"
import { Suspense } from "react"
import Analytics from "@/components/common/Analytics"

export function generateStaticParams() {
  return [
    {
      locale: "en",
    },
    {
      locale: "id",
    },
  ]
}

export const metadata: Metadata = {
  title: "OCWSB Pratama",
  description: "Welcome to OCWSB Pratama Website",
}

export default async function HomeLayout({
  children,
  params: { locale },
}: any) {
  locale = locale || "en"
  let messages

  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (err) {
    throw new Error(`Could not load messages for locale home "${locale}"`)
  }

  return (
    <html lang={locale}>
      <Suspense>
        <Analytics />
      </Suspense>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

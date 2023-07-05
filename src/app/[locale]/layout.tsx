import { NextIntlClientProvider } from "next-intl"
import { Metadata } from "next"

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  let fetchData, messages
  try {
    fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/partner`, {
      cache: "no-cache",
    })
    messages = await fetchData.json()
    console.log("messages", messages)
  } catch (err) {
    throw new Error(`Could not load messages for locale "${locale}"`)
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

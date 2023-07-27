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

export default async function NewsLayout({
  children,
  params: { locale },
}: any) {
  locale = locale || "en"
  let messages

  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (err) {
    throw new Error(`Could not load messages for locale our value"${locale}"`)
  }

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  )
}

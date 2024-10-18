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
  title: "Certification",
  description: "Certification Page",
}

export default async function NewsLayout({
  children,
  params: { locale },
}: any) {
  let messages
  locale = locale || "en"

  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (err) {
    throw new Error(
      `Could not load messages for locale certification "${locale}"`
    )
  }

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  )
}

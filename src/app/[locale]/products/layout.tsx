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
  title: "Products",
  description: "Products Page",
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
    throw new Error(`Could not load messages for locale products"${locale}"`)
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

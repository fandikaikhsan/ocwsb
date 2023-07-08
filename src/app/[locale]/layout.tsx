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

export default async function HomeLayoutLocale({
  children,
  params: { locale },
}: any) {
  let messages

  locale = locale || "en"

  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (err) {
    throw new Error(`Could not load messages for locale home "${locale}"`)
  }

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

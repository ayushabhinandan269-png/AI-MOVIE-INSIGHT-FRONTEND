import "./globals.css"
import ReduxProvider from "../src/redux/ReduxProvider"

export const metadata = {
  title: "AI Movie Insight Builder",
  description: "Movie review sentiment analysis using AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <ReduxProvider>
          {children}
        </ReduxProvider>

      </body>
    </html>
  )
}
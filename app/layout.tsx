import './globals.css'

export const metadata = {
  title: 'ChatBot',
  description: 'A chatbot with the ability to answer questions specific to our company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  )
}

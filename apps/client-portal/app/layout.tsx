import './globals.css'

export const metadata = {
  title: 'AUTO Commercial',
  description: 'Portal Commercial do AUTO Framework',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

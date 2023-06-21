import './globals.css'

export const metadata = {
  title: 'Manomay Kagalkar',
  description: 'mank\'s place on the web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

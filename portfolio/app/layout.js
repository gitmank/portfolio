import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const inter = IBM_Plex_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  style: ['italic', 'normal']
})

export const metadata = {
  title: 'Manomay Kagalkar',
  description: 'mank\'s place on the web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

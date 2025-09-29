import type { Metadata } from 'next'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

export const metadata: Metadata = {
  title: 'Cryptosizer',
  description: 'CryptoSizer is your all-in-one crypto hub — offering swap exchange services, token research, market trends, price analysis, and guides for beginners and experts in the blockchain space',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  )
}

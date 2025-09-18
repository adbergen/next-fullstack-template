import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { TRPCProvider } from '@/trpc/client'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import Navigation from '@/components/Navigation'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Next.js App Template',
  description: 'A modern web application built with Next.js, tRPC, and Better Auth'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ErrorBoundary>
          <TRPCProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
          </TRPCProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}

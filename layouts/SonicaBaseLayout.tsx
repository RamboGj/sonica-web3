import React from 'react'
import Header from '../components/Header'

interface SonaicaBaseLayoutProps {
  children: React.ReactNode
}

export default function SonicaBaseLayout({ children }: SonaicaBaseLayoutProps) {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh_-_6rem)] bg-gray300">{children}</main>
    </>
  )
}

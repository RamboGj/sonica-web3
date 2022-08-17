import React from 'react'
import Header from '../components/Header'

interface SonaicaBaseLayoutProps {
  children: React.ReactNode
}

export default function SonicaBaseLayout({ children }: SonaicaBaseLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

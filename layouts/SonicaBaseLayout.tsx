import React from 'react'
import Header from '../components/Header'

interface SonaicaBaseLayoutProps {
  children: React.ReactNode
}

export default function SonicaBaseLayout({ children }: SonaicaBaseLayoutProps) {
  return (
    <div className="max-w-screen max-h-screen">
      <Header />
      {children}
    </div>
  )
}

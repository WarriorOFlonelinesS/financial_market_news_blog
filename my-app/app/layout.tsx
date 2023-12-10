'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { QueryClient, QueryClientProvider } from 'react-query'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Slab:wght@700&display=swap');
        </style>
        <Header />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}

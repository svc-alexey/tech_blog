import { ThemeContextProvider } from '@/context/ThemeContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemePrivider from '@/providers/ThemePrivider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Октопус Блог',
  description: 'Октопус Блог!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemePrivider>
              <div className="container">
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemePrivider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

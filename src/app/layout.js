import { ThemeContextProvider } from '@/context/ThemeContext'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemePrivider from '@/providers/ThemePrivider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tech-Blog',
  description: 'The best Tech Blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  )
}

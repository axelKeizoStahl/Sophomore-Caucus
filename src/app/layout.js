import './globals.css'
import { Navbar } from './components/Navbar'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Sophmore Caucus',
  description: 'Stuyvesant High School\'s Sophmore Caucus of 2024',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
          {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components'
import Image from 'next/image'
import {pokeBall, el121, el122, el123, el125, el126, el127, el128, el120, el130} from '@/assets/images/bg_elements'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const BG_ELEMENTS = [
  {
    src: pokeBall,
    width: 420,
    height: 420,
    style: {
      top: "0px",
      right: "-12em",
      rotate: "-23.49deg"
    }
  },
  {
    src: pokeBall,
    width: 179.11,
    height: 179.11,
    style: {
      bottom: "14em",
      left: "-3em",
      rotate: "19.9deg"
    }
  },
  {
    src: el122,
    width: 65.2,
    height: 89.02,
    style: {
      bottom: "12em",
      left: "4em",
    }
  },
  {
    src: el123,
    width: 65.2,
    height: 89.02,
    style: {
      bottom: "27em",
      left: "0.5em",
    }
  },
  {
    src: el120,
    width: 40.02,
    height: 51,
    style: {
      bottom: "35em",
      left: "9em",
    }
  },
  {
    src: el130,
    width: 33.02,
    height: 37.89,
    style: {
      bottom: "23em",
      left: "11em",
    }
  },
  {
    src: el126,
    width: 36.78,
    height: 43.60,
    style: {
      bottom: "12em",
      left: "16em",
    }
  },
  {
    src: el121,
    width: 59,
    height: 103,
    style: {
      bottom: "12em",
      right: "12em",
    }
  },
  {
    src: el125,
    width: 34,
    height: 52,
    style: {
      bottom: "18em",
      right: "1em",
    }
  },
  {
    src: el128,
    width: 38,
    height: 56,
    style: {
      bottom: "24em",
      right: "8em",
    }
  },
  {
    src: el127,
    width: 27,
    height: 30,
    style: {
      bottom: "34em",
      right: "3em",
    }
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 ${inter.className}`}>
        <Header/>
        <div className="relative">
          {
            BG_ELEMENTS.map(({style, ...rest}, idx) => (
              <Image key={`bg_el_${idx}`} {...rest} style={{position: "absolute", zIndex: -2, ...style}} alt={`bg_el_${idx}`} loading='lazy'/>
            ))
          }
          
          {children}
        </div>
      </body>
    </html>
  )
}

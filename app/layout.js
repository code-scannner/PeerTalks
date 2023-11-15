import NavBar from '@/components/main/NavBar'
import './globals.css'

export const metadata = {
  title: 'PeerTalks',
  description: 'Chatting with Peers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className='relative bg-primary-25' style={{ fontFamily: "Poppins, sans-serif" }} >
        <NavBar/>
        <main className='pl-16'>
          {children}
        </main>
      </body>
    </html>
  )
}

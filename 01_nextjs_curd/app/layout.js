import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'
import {getServerSession} from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import LogoutBtn from './LogoutBtn'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions)
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="navbar"> 
        <Link href="/" className="logo">Appleforum</Link> 
        <Link href="/list">List</Link> 
        <Link href="/write">글쓰기</Link> 
        <Link href="/register">회원가입</Link> 
        {
          session 
          ? <div style={{display: 'flex', position: 'absolute' ,right: '20px', top: '20px'}}>
              <span style={{borderBottom: '2px solid blue', padding: '5px', marginRight: '10px'}}>
                {session.user.name}
              </span> 
              <LogoutBtn/> 
            </div> 
          : <div style={{display: 'flex', position: 'absolute' ,right: '20px', top: '20px'}}>
              <LoginBtn/>
            </div>
        }
      </div>  
      <hr/>
        {children}</body>
    </html>
  )
}

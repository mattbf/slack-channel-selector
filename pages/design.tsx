import { MoveLeft } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Design() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <Link href='/' className='flex items-center hover:border-zinc-200 border-transparent border-b text-sm'>
        <MoveLeft size={18} className='mr-1' />
        Back to Component
      </Link>
      <div className='w-lg p-12'></div>
      This is my reasoning
    </main>
  )
}

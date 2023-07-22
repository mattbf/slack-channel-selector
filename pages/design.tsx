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
      <div className='max-w-xl p-12'>
        <b>Building a Combobox / Autocomplete component is very hard </b> (because focus mamanement / accessibility).
        <br />
        My goal was to just emulate most of the UX of a desirable combobox component:
        <br />
        <br /> - Performant
        <br /> - Search / filtering options
        <br />
        <br />
        <br />
        <b> Added a few finishing touches 🪄 </b>
        <br />
        <br /> - Highlights matching text in channels
      </div>
    </main>
  )
}

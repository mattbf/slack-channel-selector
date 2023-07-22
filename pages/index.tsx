import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import MultiSelect from '@/components/MultiSelect'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const URL = `http://localhost:3000/api/channels`

type SelectOption = {
  name: string
  id: string
}

export default function Home() {
  const [options, setOptions] = useState<any[]>([])
  const [filteredOptions, setFilteredOptions] = useState<SelectOption[]>([])
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([])

  //We load all of the channels on page mount so that the select has the options beforehand
  useEffect(() => {
    const getSlackChannels = async () => {
      let query = ''
      const response = await fetch(`${URL}/?q=${query}`)
      const json = await response.json()
      console.log({ json })
      setOptions(json.data)
      setFilteredOptions(json.data)
    }

    getSlackChannels()
  }, [])

  const searchOptions = async (query: string) => {
    if (query) {
      setFilteredOptions(options.filter((o) => o.name.includes(query)))
    } else {
      setFilteredOptions(options)
    }
  }

  const resetSuggestions = () => {
    setFilteredOptions(options)
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <h1 className='mb-10 text-xl font-semibold text-zinc-300'>Slack Channel Selector</h1>
      <div className='w-[300px]'>
        <MultiSelect
          options={filteredOptions}
          selectedOptions={selectedOptions}
          filteredOptions={filteredOptions}
          onChange={setSelectedOptions}
          searchOptions={searchOptions}
          resetSuggestions={resetSuggestions}
        />
      </div>
      <div className='flex flex-row items-center gap-x-4 w-lg p-12 fixed bottom-2'>
        <a
          href='https://github.com/mattbf/slack-channel-selector'
          target='_blank'
          className='flex items-center hover:border-zinc-200 border-transparent border-b text-sm'
        >
          <GithubIcon size={18} className='mr-1' />
          Source Code
        </a>
        <Link href='/design' className='flex items-center hover:border-zinc-200 border-transparent border-b text-sm'>
          Design
        </Link>
      </div>
    </main>
  )
}

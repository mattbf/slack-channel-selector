import { Inter } from 'next/font/google'
import { Select } from '@/components/Select'
import { useState, useEffect } from 'react'
import MultiSelect from '@/components/MultiSelect'

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

  useEffect(() => {
    const getSlackChannels = async () => {
      let query = '' //'proj'
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
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
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
    </main>
  )
}

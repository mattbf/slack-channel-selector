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
  const [value, setValue] = useState('general')
  // const options = [
  //   {
  //     label: '#general',
  //     value: 'general'
  //   },
  //   {
  //     label: '#wip',
  //     value: 'wip'
  //   },
  //   {
  //     label: '#engineering',
  //     value: 'engineering'
  //   }
  // ]

  const [options, setOptions] = useState<any[]>([])

  useEffect(() => {
    const getSlackChannels = async () => {
      let query = 'proj'
      const response = await fetch(`${URL}/?q=${query}`)
      const json = await response.json()
      console.log({ json })
      setOptions(json.data)
    }

    getSlackChannels()
  }, [])

  const [selectedValues, setSelectedValues] = useState<SelectOption[]>([])

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      {/* <Select options={options} value={value} onChange={setValue} /> */}
      <div className='w-[300px]'>
        <MultiSelect options={options} values={selectedValues} onChange={setSelectedValues} />
      </div>
    </main>
  )
}

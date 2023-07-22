import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Chip from './Chip'
import { Check, ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'

type SelectOption = {
  name: string
  id: string
}

type Props = {
  options: SelectOption[]
  filteredOptions: SelectOption[]
  selectedOptions: SelectOption[]
  onChange: (selectedOptions: SelectOption[]) => void
  searchOptions: (query: string) => void
}

export default function MultiSelect({ options, filteredOptions, selectedOptions, onChange, searchOptions }: Props) {
  const handleChangeSelect = (event: any, option: any, isSelected: boolean) => {
    event.preventDefault()
    if (isSelected) {
      onChange(selectedOptions.filter((v) => v.id !== option.id))
    } else {
      onChange([...selectedOptions, option])
    }
  }
  const handleClearSelect = (event: any) => {
    onChange([])
  }

  const handleChangeInput = (query: string) => {
    searchOptions(query)
  }
  console.log({ options, filteredOptions })

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='text-sm w-full flex items-center justify-between rounded-md shadow-sm ring-1 ring-zinc-900/10 py-2 px-2 hover:ring-zinc-300 focus:ring-zinc-300 outline-none select-none'>
          {selectedOptions && selectedOptions.length > 0 ? (
            <div className='flex flex-row flex-wrap gap-2'>
              {selectedOptions.map((v: any) => (
                <Chip key={v.id} option={v} />
              ))}
            </div>
          ) : (
            <div className='h-[28px] flex flex-row justify-between items-center w-full'>
              Select a Slack Channel
              <ChevronDown size={16} color='currentColor' />
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='start'
          className='w-[--radix-popper-anchor-width] mt-1 flex flex-col rounded-md bg-zinc-900 border border-zinc-600 shadow-lg max-h-[300px]'
        >
          <div className='w-full py-2 px-2 border-b border-zinc-600 flex flex-row items-center justify-start mb-1 text-zinc-300 text-sm'>
            <Search size={16} color='currentColor' />
            <input autoFocus placeholder='Search Channels' className='ml-2 w-full ring-0 outline-none bg-transparent' />
          </div>
          <div className='overflow-y-auto'>
            <DropdownMenu.Item
              onSelect={(e) => handleClearSelect(e)}
              className='hover:bg-zinc-700 focus:bg-zinc-700 py-1.5 px-2 outline-none text-white rounded-md'
            >
              <button className='flex items-center justify-between w-full text-white text-sm'>
                No Channel
                {selectedOptions && selectedOptions.length < 1 && <Check strokeWidth={1.5} size={16} />}
              </button>
            </DropdownMenu.Item>
            <div className='w-full my-1 h-px bg-zinc-700' />
            {filteredOptions.map((option) => {
              const isSelected =
                selectedOptions.find((selected) => option.id === selected.id) !== undefined ? true : false
              return (
                <DropdownMenu.Item
                  key={option.id}
                  onSelect={(e) => handleChangeSelect(e, option, isSelected)}
                  className='hover:bg-zinc-700 focus:bg-zinc-700 py-1.5 px-2 outline-none text-white rounded-md'
                >
                  <button className='flex items-center justify-between w-full text-white text-sm'>
                    {option.name}
                    {isSelected && <Check strokeWidth={1.5} size={16} />}
                  </button>
                </DropdownMenu.Item>
              )
            })}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

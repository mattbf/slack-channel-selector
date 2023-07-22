import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Chip from './Chip'
import { Check, ChevronDown, Hash, Search } from 'lucide-react'
import { ChangeEvent, useRef, useState } from 'react'

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
  resetSuggestions: () => void
}

export default function MultiSelect({
  options,
  filteredOptions,
  selectedOptions,
  onChange,
  searchOptions,
  resetSuggestions
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleChangeSelect = (event: any, option: any, isSelected: boolean) => {
    event.preventDefault()
    if (isSelected) {
      onChange(selectedOptions.filter((v) => v.id !== option.id))
    } else {
      onChange([...selectedOptions, option])
    }
    inputRef?.current?.focus()
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.stopPropagation()

    const query = event.target.value.trim()
    searchOptions(query)
  }
  console.log({ options, filteredOptions })

  const handleMenuOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      //handle closing the menu
      resetSuggestions()
    }
  }

  //bolds any matching text in a slack channel name
  const boldMatchCharacters = (sentence: string, characters = '') => {
    if (!!characters) {
      const regEx = new RegExp(characters, 'gi')
      const matchedSentence = sentence.replace(regEx, `<p className='text-white'>$&</p>`)
      return
    } else {
      return sentence
    }
  }

  function highlightCharacters(sentence: string, characters = '') {
    // Create a regular expression to match the whole characters string
    const regex = new RegExp(`(${characters})`, 'g')

    // Split the sentence into segments: matching and non-matching parts
    const segments = sentence.split(regex)

    // Create an array to store the resulting objects
    const resultArray = []

    // Loop through each segment of the sentence
    for (let i = 0; i < segments.length; i++) {
      // If the segment matches the characters string, add an object with "highlight" set to true
      if (i % 2 === 1) {
        resultArray.push({ text: segments[i], highlight: true })
      } else {
        // If the segment does not match the characters string, add an object with "highlight" set to false
        resultArray.push({ text: segments[i], highlight: false })
      }
    }

    return resultArray
  }

  return (
    <DropdownMenu.Root onOpenChange={handleMenuOpenChange}>
      <DropdownMenu.Trigger asChild>
        <button className='text-sm w-full flex font-medium items-center justify-between rounded-md shadow-sm ring-1 ring-zinc-900/10 py-2 px-2 hover:ring-zinc-300 focus:ring-zinc-300 outline-none select-none'>
          {selectedOptions && selectedOptions.length > 1 ? (
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='flex items-center'>{selectedOptions.length} Channels</div>
              <ChevronDown size={16} color='currentColor' />
            </div>
          ) : selectedOptions && selectedOptions.length === 1 ? (
            <div className='flex flex-row justify-between items-center w-full'>
              <div className='flex items-center'>
                <Hash strokeWidth={1.5} size={16} />
                {selectedOptions[0].name}
              </div>
              <ChevronDown size={16} color='currentColor' />
            </div>
          ) : (
            <div className='flex flex-row justify-between items-center w-full'>
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
          <div className='w-full py-2 px-2 border-b border-zinc-600 flex flex-row items-center justify-start text-zinc-300 text-sm'>
            <Search size={16} color='currentColor' />
            <input
              autoFocus
              ref={inputRef}
              onChange={(e) => handleChangeInput(e)}
              placeholder='Search Channels'
              className='ml-2 w-full ring-0 outline-none bg-transparent'
            />
          </div>
          <div className='overflow-y-auto'>
            <div className='p-1'>
              <DropdownMenu.Item
                textValue=''
                onSelect={() => onChange([])}
                className='hover:bg-zinc-700 focus:bg-zinc-700 py-1.5 px-2 outline-none text-white rounded-md'
              >
                <button className='flex items-center justify-between w-full text-white text-sm'>
                  No Channel
                  {selectedOptions && selectedOptions.length < 1 && <Check strokeWidth={1.5} size={16} />}
                </button>
              </DropdownMenu.Item>
            </div>
            <div className='w-full h-px bg-zinc-700' />
            <div className='p-1'>
              {filteredOptions.map((option) => {
                const isSelected =
                  selectedOptions.find((selected) => option.id === selected.id) !== undefined ? true : false
                const matchedChars = highlightCharacters(option.name, inputRef?.current?.value)
                return (
                  <DropdownMenu.Item
                    textValue=''
                    key={option.id}
                    onSelect={(e) => handleChangeSelect(e, option, isSelected)}
                    className='hover:bg-zinc-700 focus:bg-zinc-800 py-1.5 px-2 outline-none text-zinc-400 rounded-md'
                  >
                    <button className='flex items-center justify-between w-full text-zinc-400 text-sm'>
                      <div className='flex items-center'>
                        <Hash strokeWidth={1.5} size={16} />

                        {matchedChars.map((c, index) => {
                          if (c.highlight) {
                            return (
                              <p key={index} className='text-white'>
                                {c.text}
                              </p>
                            )
                          } else {
                            return <p key={index}>{c.text}</p>
                          }
                        })}
                      </div>
                      {isSelected && <Check strokeWidth={1.5} size={16} />}
                    </button>
                  </DropdownMenu.Item>
                )
              })}
            </div>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

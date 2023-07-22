import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Chip from './Chip'
import { Check, ChevronDown, Search } from 'lucide-react'

type SelectOption = {
  name: string
  id: string
}

type Props = {
  options: SelectOption[]
  values: SelectOption[]
  onChange: (values: SelectOption[]) => void
}

export default function MultiSelect({ options, values, onChange }: Props) {
  const handleChangeSelect = (event: any, option: any, isSelected: boolean) => {
    event.preventDefault()
    if (isSelected) {
      onChange(values.filter((v) => v.id !== option.id))
    } else {
      onChange([...values, option])
    }
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='w-full flex items-center justify-between rounded-md shadow-sm ring-1 ring-zinc-900/10 py-2 px-2 hover:ring-zinc-300 focus:ring-zinc-300 outline-none select-none'>
          {values && values.length > 0 ? (
            <div className='flex flex-row flex-wrap gap-2'>
              {values.map((v: any) => (
                <Chip key={v.id} option={v} />
              ))}
            </div>
          ) : (
            'Select a Slack Channel'
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align='start'
          className='w-[--radix-popper-anchor-width] mt-1 flex flex-col border rounded-md'
        >
          <div className='w-full py-2 px-2 border-b border-zinc-200 flex flex-row items-center justify-start'>
            <Search size={16} color='currentColor' />
            <input autoFocus placeholder='Search Channels' className='ml-2' />
          </div>
          {options.map((option) => {
            const isSelected = values.find((value) => option.id === value.id) !== undefined ? true : false
            return (
              <DropdownMenu.Item
                key={option.id}
                onSelect={(e) => handleChangeSelect(e, option, isSelected)}
                className='hover:bg-zinc-100 focus:bg-zinc-100 py-1.5 px-2 outline-none'
              >
                <button className='flex items-center justify-between w-full'>
                  {option.name}
                  {isSelected && <Check strokeWidth={1.5} size={16} />}
                </button>
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

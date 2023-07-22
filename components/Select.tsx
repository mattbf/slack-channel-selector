import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'

type SelectOption = {
  label: string
  value: string
}

type Props = {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
}

const URL = `http://localhost:3000/api/channels`

export function Select({ options, value, onChange }: Props) {
  const selectedOption = options.find((option) => option.value === value)

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='w-64 flex items-center justify-between rounded-md ring-1 ring-zinc-900/10 shadow-sm py-1.5 px-2 hover:ring-zinc-300 focus:ring-zinc-300 outline-none select-none'>
          {selectedOption?.label}
          <ChevronDown strokeWidth={1} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align='start' className='w-64 mt-1 flex flex-col border rounded-md'>
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.value}
              onSelect={() => onChange(option.value)}
              className='hover:bg-zinc-100 focus:bg-zinc-100 py-1.5 px-2 outline-none'
            >
              <button className='flex items-center justify-between w-full'>
                {option.label}
                {option === selectedOption && <Check strokeWidth={1} />}
              </button>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronDownIcon } from './Icons'

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
        <button className='w-64 flex items-center justify-between rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 px-2 hover:ring-slate-300 focus:ring-slate-300 outline-none select-none'>
          {values && values.length > 0 ? (
            <>
              {values.map((v: any) => (
                <p key={v.id}>{v.name}</p>
              ))}
            </>
          ) : (
            'Select a Slack Channel'
          )}
          <ChevronDownIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align='start' className='w-64 mt-1 flex flex-col border rounded-md'>
          {options.map((option) => {
            const isSelected = values.find((value) => option.id === value.id) !== undefined ? true : false
            return (
              <DropdownMenu.Item
                key={option.id}
                onSelect={(e) => handleChangeSelect(e, option, isSelected)}
                className='hover:bg-slate-100 focus:bg-slate-100 py-1.5 px-2 outline-none'
              >
                <button className='flex items-center justify-between w-full'>
                  {option.name}
                  {isSelected && <CheckIcon />}
                </button>
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

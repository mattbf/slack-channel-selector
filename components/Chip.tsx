import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Hash, X } from 'lucide-react'

type SelectOption = {
  name: string
  id: string
}

type Props = {
  option: SelectOption
  //   onChange: (values: SelectOption[]) => void
}

export default function Chip({ option }: Props) {
  return (
    <button className='cursor-text text-xs flex flex-row align-middle items-center justify-between bg-zinc-100 rounded-md py-1.5 px-2 focus:ring-zinc-300 outline-none select-none'>
      <div className='flex items-center'>
        <Hash strokeWidth={1.5} size={12} />
        {option.name}
      </div>
      <button className='hover:text-zinc-400'>
        <X size={12} className='ml-2' color='currentColor' />
      </button>
    </button>
  )
}

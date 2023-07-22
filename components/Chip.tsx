import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { CloseICon } from './Icons'

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
    <button className='text-xs flex flex-row items-center align-middle items-center justify-between bg-slate-100 hover:bg-slate-200 rounded-md ring-1 ring-slate-900/10 py-1.5 px-2 focus:ring-slate-300 outline-none select-none'>
      {option.name}
      <CloseICon size={12} />
    </button>
  )
}

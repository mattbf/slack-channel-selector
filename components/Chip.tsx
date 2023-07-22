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
    <button className='w-64 flex items-center justify-between rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 px-2 hover:ring-slate-300 focus:ring-slate-300 outline-none select-none'>
      option label
      <CloseICon />
    </button>
  )
}

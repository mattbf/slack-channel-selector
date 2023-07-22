interface IconProps {
  size?: number
}

export function CheckIcon(props: IconProps) {
  const { size = 20, ...rest } = props

  return (
    <svg width={size} height={size} fill='none' viewBox='0 0 24 24' {...rest}>
      <path
        d='M7.75 12.75L10 15.25L16.25 8.75'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  const { size = 20, ...rest } = props

  return (
    <svg width={size} height={size} fill='none' viewBox='0 0 24 24' {...rest}>
      <path
        d='M16.125 10L12.0625 14.375L8 10'
        stroke='currentColor'
        strokeWidth='1.875'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

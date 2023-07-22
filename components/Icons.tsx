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

export function CloseICon(props: IconProps) {
  const { size = 20, ...rest } = props

  return (
    <svg
      width={size}
      height={size}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
      className='flex flex-col items-center justify-center'
    >
      <path
        d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='0.5'
        fill-rule='evenodd'
        clip-rule='evenodd'
      />
    </svg>
  )
}

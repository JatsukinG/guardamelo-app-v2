import type { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'clsx'
// TODO should we use the Button component from headless-ui?
// import { Button } from '@headlessui/react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}


const CustomButton: FC<Props> = ({ className, children, ...rest }) => {
  return (
      <button
          {...rest}
          className={clsx([
            'mb-5 w-full text-white bg-primary-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
            'hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-500',
            className,
          ])}
      >
        {children}
      </button>
  )
}

export default CustomButton
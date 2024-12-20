import type { FC, PropsWithChildren } from 'react'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="w-full min-h-screen flex bg-purple-50">
        <div className="max-w-3xl m-auto">
          {children}
        </div>
      </div>
  )
}

export default AuthLayout
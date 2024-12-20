import type { FC, PropsWithChildren } from 'react'
import type { UserNode } from '@types'
import { useQuery } from '@apollo/client'
import { Navigate } from 'react-router-dom'
import Me from '@auth/queries/Me'
import { useAuth } from '@auth/hooks'
import { LoadingPage } from '@components'
import MeContext from '@auth/contexts/MeContext'

const MeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  const { data, error, loading } = useQuery(Me, {
    fetchPolicy: 'network-only',
    skip: !isAuthenticated,
  })

  if (!isAuthenticated) {
    return (
        <MeContext.Provider value={null}>
          {children}
        </MeContext.Provider>
    )
  }

  if (error)
    return <Navigate to="/auth/login"/>

  const canRenderChildren = !loading && data?.me

  return (
      <MeContext.Provider value={data?.me as UserNode}>
        {canRenderChildren ? children : <LoadingPage/>}
      </MeContext.Provider>
  )
}

export default MeProvider
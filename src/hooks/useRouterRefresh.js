import { useCallback } from 'react'
import { useRouter } from 'next/router'

export function useRouterRefresh() {
  const { asPath } = useRouter()
  const router = useRouter()
  const refresh = useCallback(() => router.replace(asPath), [asPath, router])

  return refresh
}

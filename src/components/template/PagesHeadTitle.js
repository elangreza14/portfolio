import React from 'react'
import Head from 'next/head'
import { useRoleContext } from '../../context/RoleContextProvider'
import { useRouter } from 'next/router'

const PagesHeadTitle = props => {
  const { state_role } = useRoleContext()
  // console.log(state_role)
  const router = useRouter()
  // console.log(router.pathname)
  return (
    <div>
      <Head>
        <title>
          {props.titlehead ||
            state_role.pages.find(x => x.link === router.pathname)?.title}{' '}
          | My Portfolio
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <h3>
        {props.title ||
          state_role.pages.find(x => x.link === router.pathname)?.title}{' '}
        Page
      </h3> */}
      <div>{props.children}</div>
    </div>
  )
}

export default React.memo(PagesHeadTitle)

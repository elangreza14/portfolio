import cookie from 'cookie'
import { DecripParseProm } from './ConvertEncrip'
import { IsBrowser } from './IsBrowser'
import { destroyCookie } from 'nookies'

const CheckCookiesFalse = ctx => {
  const { req, res } = ctx
  const parsedCookies = cookie.parse(req?.headers?.cookie || 'user')
  if (!IsBrowser() && res && parsedCookies['user']) {
    DecripParseProm(
      parsedCookies['user'],
      process.env.NEXT_CONTEXT_LOCK_RISELOKA
    )
      .then(resx => {
        // console.log('dari true oi oi ', resx.isLoggedIn)
        if (resx.isLoggedIn === true) {
          res.setHeader('Content-Type', 'text/html')
          res.writeHead(302, { Location: '/app/dashboard/home' })
          res.end()
        }
      })
      .catch(() => {
        destroyCookie(ctx, 'user')
      })
  }
}

export default CheckCookiesFalse

import '../styles/global.scss'

import type { AppProps } from 'next/app'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks')
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  return <Component {...pageProps} />
}

export default MyApp

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const getPointBaseApiToken = (hostname: string) => {
  // サーバーサイドでのみcookie取得可能(セキュリティのため、クライアントサイドでのtoken取得は制限している)。
  // また、cookiesはサーバーコンポーネントでのみ実行可能な関数でサーバーサイドでのみcookie取得可能。
  return typeof window === 'undefined' && cookies().get(hostname)?.value
}

export const setPointBaseApiToken = (
  response: NextResponse,
  name: string,
  value: string,
) => {
  // NextResponseへcookieセット
  response.cookies.set(name, value, {
    httpOnly: true, // クライアント側からのアクセスを禁止
    secure: process.env.NODE_ENV === 'production', // HTTPSのみでのアクセスを許可
  })
  return response
}

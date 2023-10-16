/*
 * Next.jsのheaders関数を使用しており、
 * page.tsxもしくはlayout.tsx内でのみ使用可。
 * https://nextjs.org/docs/app/api-reference/functions/headers
 */
import { headers } from 'next/headers'

// リクエストヘッダーのホスト名を取得
export const getHostname = () => {
  const headersList = headers()
  return headersList.get('host') as string
}

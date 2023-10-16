import { NextResponse, type NextRequest } from 'next/server'
import { setPointBaseApiToken } from '~/utils/token'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next()
  const { pathname, searchParams } = new URL(request.url)

  const hostname = request.headers.get('host') as string // ホスト名を取得

  // トップページのときのみクエリパラメータからtoken取得
  const pointBaseApiToken = pathname === '/' ? searchParams.get('token') : null

  if (pointBaseApiToken) {
    // クエリパラメータにトークンが存在する場合
    response = NextResponse.redirect(new URL(pathname, request.url)) // トークン付きURLがブックマークされるのを防ぐため、クエリパラメータなしで同一ページへリダイレクト
    response = setPointBaseApiToken(response, hostname, pointBaseApiToken)
    return response
  }

  return response
}

export const config = {
  // hint:app routerの各ページファイルのリクエストのみmiddlewareを実行するため、api, _next/static, _next/image, assets, favicon.icoで始まるpathは除外
  // (https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
}

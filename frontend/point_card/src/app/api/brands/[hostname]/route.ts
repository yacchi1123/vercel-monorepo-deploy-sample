import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { hostname: string } },
) {
  return NextResponse.json({
    id: 'xxxxxxxxx1',
    name: 'giftee for Business',
    hostName: 'dummy.localhost:3000',
    logo: '/assets/images/dummy/giftee-for-business-logo.png',
    theme: {
      colors: {
        primary: '#0C6993',
        secondary: '#000000',
      },
    },
    links: {
      corporateSite: {
        text: 'giftee for Business',
        url: 'https://giftee.biz/',
      },
      contact: {
        text: 'お問い合わせ',
        url: 'https://giftee.biz/inquiry/',
      },
      signIn: {
        text: 'ログイン',
        url: 'https://giftee.biz/',
      },
      signUp: {
        text: '会員登録',
        url: 'https://giftee.biz/',
      },
      signOut: {
        text: 'ログアウト',
        url: '',
      },
    },
    topUnAuthenticatePanel: {
      mainTextHtml: '<p>商品と交換する場合は、ログインしてください</p>',
      subTextHtml:
        '<p>ログインすると、ポイントを使ってお好きな商品と交換できます。</p>',
    },
  })
}

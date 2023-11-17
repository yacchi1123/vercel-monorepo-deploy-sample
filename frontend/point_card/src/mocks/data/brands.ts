import { MOCK_HOST_NAMES } from '~/mocks/data/hostnames'

export const MOCK_BRANDS_LIST: BrandInfo[] = [
  {
    id: 'xxxxxxxxx1',
    name: 'giftee for Business',
    hostName: MOCK_HOST_NAMES.BRAND01,
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
  },
  {
    id: 'xxxxxxxxx2',
    name: 'giftee',
    hostName: MOCK_HOST_NAMES.BRAND02,
    logo: '/assets/images/dummy/giftee-logo.svg',
    theme: {
      colors: {
        primary: '#F08B71',
        secondary: '#000000',
      },
    },
    links: {
      corporateSite: {
        text: 'giftee',
        url: 'https://giftee.com/',
      },
      contact: {
        text: 'お問い合わせ',
        url: 'https://giftee.com/contact/top',
      },
      signIn: {
        text: 'ログイン',
        url: 'https://giftee.com/',
      },
      signUp: {
        text: '会員登録',
        url: 'https://giftee.com/',
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
  },
]

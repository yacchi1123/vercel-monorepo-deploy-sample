import { getAPI } from '~/utils/api/fetch'

const MOCK_LOCALHOST_URL = process.env.NODE_ENV === 'production' ? 'https://dummy.spa-works.jp' : 'http://localhost:3000'

const MOCK_BASE_URL =
  typeof window === 'undefined' ? `${MOCK_LOCALHOST_URL}/api` : '/api'

// ブランド情報取得API
export const fetchBrandInfo = (hostname: string) => {
  return getAPI<BrandInfo>(`${MOCK_BASE_URL}/brands/${hostname}`)
}


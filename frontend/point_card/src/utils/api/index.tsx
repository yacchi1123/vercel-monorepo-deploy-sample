import { getAPI } from '~/utils/api/fetch'

const MOCK_BASE_URL =
  typeof window === 'undefined' ? `http://localhost:3000/api` : '/api'

// ブランド情報取得API
export const fetchBrandInfo = (hostname: string) => {
  console.log('fetchBrandInfo', `${MOCK_BASE_URL}/brands/${hostname}`)
  return getAPI<BrandInfo>(`${MOCK_BASE_URL}/brands/${hostname}`)
}


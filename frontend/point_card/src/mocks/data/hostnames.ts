export const MOCK_HOST_NAMES = {
  BRAND01:
    process.env.NODE_ENV === 'production'
      ? 'dummy.spa-works.jp'
      : 'dummy.localhost:3000',
  BRAND02:
    process.env.NODE_ENV === 'production'
      ? 'dummy2.spa-works.jp'
      : 'dummy2.localhost:3000',
}

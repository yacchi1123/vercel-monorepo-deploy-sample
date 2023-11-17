import { NextResponse } from 'next/server'
import { MOCK_BRANDS_LIST } from '~/mocks/data/brands'

export async function GET(
  request: Request,
  { params }: { params: { hostname: string } },
) {
  const data =
    MOCK_BRANDS_LIST?.find((brand) => brand.hostName === params.hostname) ||
    null
  return NextResponse.json(data, data ? { status: 200 } : { status: 404 })
}

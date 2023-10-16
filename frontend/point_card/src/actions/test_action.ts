'use server'
import { redirect } from 'next/navigation'
import { getHostname } from '~/utils/headers'
import { getPointBaseApiToken } from '~/utils/token'

export async function testAction(
  callbackUrl: string,
) {
  const hostname = getHostname()
  const token = getPointBaseApiToken(hostname) // ポイント利用API実行時に使用
  console.log('token: ', token)

  // TODO:ポイント利用API実装

  redirect(`${callbackUrl}?value=${token}`)
}

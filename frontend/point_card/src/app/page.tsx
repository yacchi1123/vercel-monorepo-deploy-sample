import Image from 'next/image'
import {testAction} from '~/actions/test_action'
import Button from '~/components/button'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button action={testAction}/>
    </main>
  )
}

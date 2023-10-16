'use client'
import React from 'react'

type Props = {
  action: any
}

const Button: React.FC<Props> = ({action}) => {
  return (
    <form action={() => action('/hoge')}>
    <button type='submit'>クリック</button>
  </form>
  )
}

export default Button
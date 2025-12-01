import React from 'react'
import { Headline } from '../components/navigation/Headline'
import { About } from '../components/navigation/About'
import { Offers } from '../components/navigation/Offers'
import { Connect } from '../components/navigation/Connect'

export const Homepage = () => {
  return (
    <>
      <Headline />
      <About />
      <Offers />
      <Connect />
    </>
  )
}

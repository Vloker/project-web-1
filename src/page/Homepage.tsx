import React from 'react'
import { Headline } from '../components/navigation/home/Headline'
import { About } from '../components/navigation/home/About'
import { Offers } from '../components/navigation/home/Offers'
import { Connect } from '../components/navigation/home/Connect'

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

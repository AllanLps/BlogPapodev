import Banner from 'components/Banner'
import Rodape from 'components/Rodape'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
   <main>
        <Banner/>
        <Outlet></Outlet>
        <Rodape></Rodape>
   </main>
  )
}

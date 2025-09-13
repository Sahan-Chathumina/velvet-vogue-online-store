import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'

const UserLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      {/* Footer */}
    </>
  )
}

export default UserLayout

import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
    const { children } = props
    return (
     <div className='flex flex-col min-h-screen relative bg-state-900'>
          <Header/>
          <main className='flex-1 bg-yellow-300'>
           {children}
    </main>
    <Footer/>
    </div>
  )
}

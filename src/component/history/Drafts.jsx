import React from 'react'
import Piece from './Piece'

const Drafts = () => {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4'>
        <Piece/>
        <Piece/>
        <Piece/>
        <Piece/>
        <Piece/>
        <Piece/>
        <Piece/>
        <Piece/>
    </div>
  )
}

export default Drafts
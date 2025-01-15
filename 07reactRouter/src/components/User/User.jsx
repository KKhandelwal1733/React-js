import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams()
  return (
    <div className='bg-red-400 text-white text-3xl p-4'>
     User :{id}
    </div>
  )
}

export default User
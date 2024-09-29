import React from 'react'

function Card({img,title,description}) {
  return (
    <div className='card-bg-gradient rounded-2xl p-5 border min-h-[40svh] '>
        <div className='w-20'>
            {img}
        </div>
        <h3 className='text-3xl font-semibold my-4'>{title}</h3>
        <p className='text-lg '>{description}</p>
    </div>
  )
}

export default Card
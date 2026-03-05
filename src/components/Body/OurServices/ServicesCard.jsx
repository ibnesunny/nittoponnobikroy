import React from 'react'

const ServicesCard = ({ card }) => {
  const { name, description, icon, alt } = card;

  return (
    <div className={`card relative z-10 p-6 shadow-lg shadow-cyan-500/50 flex justify-center bg-white/60 backdrop-blur-md rounded-xl`}>
      <figure>
        <img src={icon} alt={alt} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      </figure>
      <div className="card-body flex flex-col items-center text-center md:text-left ml-4">
        <h2 className="card-title text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-sm md:text-md">{description}</p>
      </div>
    </div>
  )
}

export default ServicesCard

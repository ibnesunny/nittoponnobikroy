import React from 'react'

const InfoCard = ({ card }) => {
   
    const { name, description, icon, bgClass, alt } = card;

    return (
        <div className={`text-center

        card card-side  shadow-xl ${bgClass}  text-white 
         ` }>
            <figure className=' h-[140px]  p-1 md:pd-2 lg:p-6'>
                <img src={icon} alt={alt} />
            </figure>
            <div className="card-body 
">
                <h2 className="font-bold text-2xl 
 ">{name}</h2>
                <p>{description}</p>
            </div>

        </div>
    )
}

export default InfoCard

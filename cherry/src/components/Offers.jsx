import React from 'react'

export const Offers = ({offerdata}) => {
  return (
    <div>
        <section className="offers">
        <div className="container">
            {offerdata.map(offer=>(
                <img key={offer} className="offer" src={offer}/>
            ))}
            
        </div>
    </section>
    </div>
  )
}

import React from 'react'
import { Restaurant } from './Restaurant'
export const Restaurants = ({restaurant}) => {
  return (
    <div className="container divider">
    <div className="cards">
      {restaurant.map(rest=>(
          <Restaurant rest={rest} key={rest.id}/>
      ))}
    </div>
</div>   
  )
}

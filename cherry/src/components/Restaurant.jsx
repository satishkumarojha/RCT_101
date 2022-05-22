import React from 'react'

export const Restaurant = ({rest}) => {
  return (
              <div className="card">
                    <img width="254" height="160px" src={rest.image} />
                    <div className="restaurant-details">
                        <div className="restaurant-title">{rest.name}</div>
                        <div className="restaurant-subtitle">{rest.category.join(", ")}</div>
                    </div>
                    <div className="restaurant-info">
                        <div className="restaurant-ratings">
                            <i className="material-icons star-icon">star</i> {rest.rating}
                        </div>
                         .<div className="restaurant-delivery-timings"> {rest.deliveryTimings}</div> .
                        <div className="restaurant-cost-for-two">₹{rest.costfortwo} FOR TWO</div>
                    </div>
                    <div className="offer-banner">
                        <span className="material-icons"> local_offer </span>
                        <span className="offer-text">20% off | Use TRYNEW</span>
                    </div>
                </div>
  )
}

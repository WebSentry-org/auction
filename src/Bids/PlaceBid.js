import React from 'react'
import bidsContext from './Context'

const currencies = ['SEK','USD','GBP','EUR']

const PlaceBid = () => {
  const { Consumer } = bidsContext
  return (
    <Consumer>
      {([,bidsFunction]) => (
        <form className="bid-form" onSubmit={bidsFunction.placeBid}>
          <label>Name<input type="text" name="name" placeholder="Your name"/></label>
          <label>Amount<input type="number" name="bid"placeholder="0" /></label>
          <label>Currency
            <select name="currency">
              {currencies.map((currency) => <option key={currency}>{currency}</option>)}
            </select>
          </label>
          <label><button>Place bid</button></label>
        </form>
      )}
    </Consumer>
  )
}

export default PlaceBid

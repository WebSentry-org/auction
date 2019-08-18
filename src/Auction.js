import React from 'react';
import fetch from 'node-fetch'

import { Bids, PlaceBid, ListBids } from './Bids'

import './auction.scss';


/*
  KISS & YAGNI
*/

const item = {
  currency: "SEK",
  currency_rates: {}
}

const currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY || "No-Key-Found!" // Do this way right now, normally throw an exception since we are missing a critical key

class Auction extends React.Component {
  state = {currency_rates: false}
  getCurrencyRates() {
    fetch(`https://free.currconv.com/api/v7/convert?q=SEK_USD,SEK_EUR,SEK_GBP,SEK_SEK&compact=ultra&apiKey=${currencyApiKey}`)
    .then(rsp => {
      if (rsp.status !== 200) {
        throw new Error('http error, unable to get request')
      }
      return rsp.json()
    })
    .then(currency_rates => {
      this.setState({currency_rates})
    })
    .catch((err) => {
      // Opps, handle err
      console.error(err);
    });
  }

  render() {
    const { currency_rates } = this.state
    if (!currency_rates) {
      this.getCurrencyRates()
      return <div>Loading... please wait</div>
    }

    return (
      <div className="auction" data-test-id="auction">
        <h1>Auction</h1>
        <p className="center">Your are bidding on this work sample, all bids are stored in SEK, converted from your chosen currency when placing the bid</p>
        <Bids item={{...item,currency_rates}}>
          <PlaceBid />
          <ListBids />
        </Bids>
      </div>
    )
  }
}

export default Auction;

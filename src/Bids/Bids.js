import React, {useState} from 'react'
import bidsContext, { defaultBids } from './Context'

const Bids = (props) => {

  const [bidsState, setBidsState] = useState(defaultBids)
  const [bidsData, bidsFuncs] = bidsState

  const { children, item } = props
  const { Provider } = bidsContext

  bidsFuncs.placeBid = (ev) => {
    ev.preventDefault()
    const form = ev.target

    const currency = form.querySelector('select').value
    const rate = item.currency_rates[item.currency + "_" + currency]
    const amount = Number(form.querySelector('input[name=bid]').value / rate).toFixed(2)

    const bid = {
      name: form.querySelector('input[name=name]').value,
      amount,
      currency: "SEK",
      selectedCurrency: currency
    }

    // Simple validation
    if (bid.amount < 1) {
      alert('Amount have to be greater then 1')
      return false
    }

    if (bid.name.length < 1) {
      alert('You must enter name')
      return false
    }

    const lastBid = bidsData[0] || false;

    if (lastBid && Number(lastBid.amount) >= amount) {
      alert('Bid must be greater then previous bid')
      return false;
    }

    bidsData.unshift(bid)
    setBidsState([bidsData, bidsFuncs])
    form.reset()
  }

  return (
    <Provider value={[bidsData,bidsFuncs]}>
      {children}
    </Provider>
  )
}

export default Bids


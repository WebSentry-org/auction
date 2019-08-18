import React from 'react'
import bidsContext from './Context'

const ListBids = () => {
  const { Consumer } = bidsContext
  return (
    <Consumer>
      {([bids]) => {

        if (bids.length === 0) {
          return (<div>No bids has been placed</div>)
        }

        return (

          <table className="bids">
            <thead>
              <tr>
                <th>Name</th>
                <th>Bid</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr key={bid.amount}>
                  <td>
                    {bid.name}
                  </td>
                  <td>
                    {bid.amount} {bid.currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      )}}
    </Consumer>
  )
}

export default ListBids

import { createContext } from 'react'

export const defaultBids = [[], {
  placeBid: (bid) => {}
}]

const bidsContext = createContext(defaultBids)

export default bidsContext

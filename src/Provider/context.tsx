import { createContext, useContext } from 'react'

export type DataContextType = {
  ismodalOpen: boolean
  setIsmodalOpen: (state: boolean) => void
}

export const DataContext = createContext<DataContextType>({
  ismodalOpen: false,
  setIsmodalOpen: (state: boolean) => state
})

// export const provider = (props) => {
//   return <DataContext.Provider value>{props.children}</DataContext.Provider>
// }

export const useData = () => useContext(DataContext)

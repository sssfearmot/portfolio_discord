import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
})

const AppProviders = ({ children }) => {
  return (
      <QueryClientProvider client={client}>
        <Router>{children}</Router>
      </QueryClientProvider>
  )
}

export default AppProviders

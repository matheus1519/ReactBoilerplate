import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './routes'

import { GlobalStyles } from './styles/globalStyles'

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  )
}

import { Routes as Switch, Route } from 'react-router-dom'
import { Initial } from '../pages/Initial'

export const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        element={<Initial />}
      />
    </Switch>
  )
}

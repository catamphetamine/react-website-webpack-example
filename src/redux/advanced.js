// https://github.com/catamphetamine/react-website#redux-module
import { ReduxModule } from 'react-website'

const redux = new ReduxModule()

export const getValue = redux.action(
	// Imitates a slow HTTP request.
  (value) => async http => await new Promise(resolve => setTimeout(() => resolve(123), 2000)),
  'value'
)

export default redux.reducer()
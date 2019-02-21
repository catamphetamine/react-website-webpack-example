import { render } from 'react-website'

import settings from './react-website'

export default async function() {
	// Renders the webpage on the client side
	const result = await render(settings)
	// If there was an error during the initial rendering
	// then `result` will be `undefined`.
	if (result) {
		const { store, rerender } = result
		// Webpack "Hot Module Replacement"
		if (module.hot) {
			module.hot.accept('./react-website', () => {
				store.hotReload(settings.reducers)
				rerender()
			})
		}
	}
}
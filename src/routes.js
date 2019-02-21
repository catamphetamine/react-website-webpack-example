import App from './pages/App'
import Basic from './pages/Basic'
import Advanced from './pages/Advanced'

export default [{
	path: '/',
	Component: App,
	children: [
		{ Component: Basic },
		{ path: 'advanced', Component: Advanced }
	]
}]
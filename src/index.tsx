import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { App } from './App'
import './scss/style.scss'
import './firebase'

const rootElem = document.getElementById('root')

if (rootElem) {
	const root = ReactDOM.createRoot(rootElem)
	root.render(
		<HashRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</HashRouter>
	)
}

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'store'
import App from './App'
import './scss/index.scss'

const rootElement = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

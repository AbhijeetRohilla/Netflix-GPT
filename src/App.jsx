import { Provider } from 'react-redux'
import './App.css'
import Body from './component/body'
import ErrorBoundary from './ErrorHandling/ErrorBoundary'
import store from './redux/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
      </Provider>
    </>
  )
}
export default App

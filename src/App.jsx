import './App.css'
import Body from './component/body'
import ErrorBoundary from './ErrorHandling/ErrorBoundary'

function App() {
  return (
    <>
      <ErrorBoundary>
        <Body />
      </ErrorBoundary>
    </>
  )
}
export default App

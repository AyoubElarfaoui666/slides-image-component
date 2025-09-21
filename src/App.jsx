
import './App.css'
import SlidesImages from './slidesImage/SlidesImage'
import { store } from './slidesImage/store'
import { Provider } from 'react-redux'

function App() {
  

  return (
    <>
      <Provider store={store}>
        <SlidesImages /> 
      </Provider>
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'normalize.css'
import './styles/globalStyle'

ReactDOM.render(<App />, document.getElementById('app'))

if (process.env.NODE_ENV === 'development') {
  module.hot.accept()
}

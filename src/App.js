import React, { Component } from 'react'
import { initStore } from './store'
import { Provider } from 'react-redux'
import UserSearch from 'views/userSearch'
import Routes from 'routes'
import GlobalStyle from 'styles/globalStyle'

const store = initStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    )
  }
}

export default App

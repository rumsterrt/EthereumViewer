import React, { Component } from 'react'
import { initStore } from './store'
import Repositories from './views/pages/repositories'
import { Provider } from 'react-redux'

const store = initStore({ repositories: [] })

class App extends Component {
  render() {
    return <Provider store={store} />
  }
}

export default App

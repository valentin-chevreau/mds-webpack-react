import React from 'react'
import ReactDOM from 'react-dom'

import List from './list'

import './index.scss'

const list = [{
	name: 'Cyril',
  age: 31
}, {
  name: 'Echo',
  age: 24
}, {
  name: 'Valentin',
  age: 21
}]

const App = () => (
  <List list={list} />
)

ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'
import MyReadsApp from './App'
import {BrowserRouter} from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <MyReadsApp/>
  </BrowserRouter>, document.getElementById('root'))

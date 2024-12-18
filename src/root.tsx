import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import App from './components/App/App'

import './root.sass'
import Error404 from './components/Error404/Error404'

let elm = document.getElementById('#root')
if (!elm) {
  elm = document.createElement('div')
  elm.id = 'root'
  document.body.replaceChildren(elm)
}

const root = ReactDOM.createRoot(elm)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'

import Index from './components/Index/Index'
import Error404 from './components/Error404/Error404'

import './root.sass'

let elm: HTMLElement|null = document.getElementById('#root')
if (!elm) {
  elm = document.createElement('div')
  elm.id = 'root'
  document.body.replaceChildren(elm)
}

const root: ReactDOM.Root = ReactDOM.createRoot(elm)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

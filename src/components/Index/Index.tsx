import React from "react"

import './Index.sass'
import Header from "./Header/Header"
import Main from "./Main/Main"

const Index: React.FC<{}> = () => {
  return (
    <div>
      <Header/>
      <Main />
    </div>
  )
}

export default Index
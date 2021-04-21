import React from 'react'
import ReactDOM from 'react-dom'
import OrderPizza from './OrderPizza'
it("renders without crashing",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<OrderPizza/>,div)
})
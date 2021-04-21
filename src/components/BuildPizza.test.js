import React from 'react'
import ReactDOM from 'react-dom'
import BuildPizzas from './BuildPizza'

it("renders without crashing",()=>{
     const div = document.createElement("div");
     ReactDOM.render(<BuildPizzas/>,div)
})

test('number intitialised',()=>{
    expect((t_cost).toBe(0))
})
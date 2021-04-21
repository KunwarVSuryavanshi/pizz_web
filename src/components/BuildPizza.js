import React, { Component } from 'react'
import axios from 'axios'
import './BuildPizza.css'
class BuildPizzas extends Component{
    constructor(){
        super();
        this.state={ 
            arr:[],
            t_cost:0,
            piz_cost:0
        }
        axios.get('http://localhost:3004/ing')
        .then((response)=>{
            this.setState({
                arr:response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        this.addcost = this.addcost.bind(this);
    }
    addcost(event){
        if(event.target.checked){
            this.setState({
                t_cost:this.state.t_cost + parseInt(event.target.value)
            })
        }
        else{
            this.setState({
                t_cost:this.state.t_cost - parseInt(event.target.value)
            })
        }
    }
    render(){
        var z;
        let show_table = this.state.arr.map((items)=>{
            return(
                <tr className="build_table_row">
                    <td><img src={items.image}/></td>
                    <td><b>{items.tname} ₹{items.price}.00</b></td>
                    <td id="last_d"><input type="checkbox" value={items.price} onChange={this.addcost}/>Add</td>
                </tr>
            )
        })
        return(
            <div className="build_div">
                <h3>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below</h3>
                <table className="build_table">
                    {show_table}
                </table>
                <h2>Total Cost: {this.state.t_cost}</h2>
                <div>
                    <button>Build Ur Pizza</button>
                </div>
            </div>
        )
    }
}
export default BuildPizzas;
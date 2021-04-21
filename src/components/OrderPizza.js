import React, { Component } from 'react'
import axios from 'axios'
import './orderPizza.css'
import {connect } from 'react-redux'
import {setPrice} from '../redux/pizza.action'
class OrderPizza extends Component{
    constructor(){
        super()
        this.state={
            p_data:[],
        }
        axios.get('http://localhost:3004/pizzas')
        .then((response)=>{
            this.setState({
                p_data:response.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })  
    }
    getPrice(e){
        console.log("Before e "+e)
        let ev = parseInt(e)
        this.setPrice(ev)
    }
    
    renderTableData(){
        return this.state.p_data.map((item,key)=>{
            const {id,type,price,name,image,description,ingredients,topping}=item;
            
            return(
                <div className="container_1">
                    <table>
                        <tr>
                            <td className="container1_name"><b>{name} <br/><br/>
                                <button style={{backgroundColor:type==='veg'? 'green':'red', width:'20px',height:'20px', margin:'10px'}}></button><br/>₹ {price}</b>
                            </td>
                            <td style={{'width':'200px'}}>{description}<br/><br/><b>Ingredients:</b>{ingredients.join(", ")}<br/><br/><b>Toppings:</b>{topping.join(", ")}</td>
                            <td>
                                <img src={image}/>
                                <button id="l_but" value={price} onClick={()=>this.props.setPrice(price)}>
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="order_container">
                {this.renderTableData()}
                <div></div>
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        c_price: state.cprice.c_price
    }
}
function mapDispatchToProps(dispatch){
    return{
        setPrice : (c_price) => dispatch(setPrice(c_price))
    }
}
export default OrderPizza;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/PizzeriaLogo.png'
import './Header.css'
import HomeScreen from './HomeScreen'
class Header extends Component{
    render(){
    return(
        <div className='header_div'>
            <nav className='header_nav'>
                <ul>
                    <li className='li_text'>
                        Pizzeria
                    </li>
                    <li className="li_img"> 
                        <Link to='/home' >
                            <img src={logo}/>
                        </Link>
                    </li>
                    <li id="text">
                        <Link to='/orderPizza' >
                            Order Pizza
                        </Link>
                    </li>
                    <li id="text">
                        <Link to='/buildPizza'>
                            Build Ur Pizza
                        </Link>
                    </li>
                    <li id='shop_cart'>
                        <button >
                            <span class="glyphicon glyphicon-shopping-cart"></span> Shoping cart
                        </button>
                    </li>
                </ul>        

            </nav>
        </div>    
        )
    }
}
export default Header;
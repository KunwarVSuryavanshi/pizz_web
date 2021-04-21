import React, { Component } from 'react'
import './Homescreen.css'
import ing from '../images/ingredient.jpg'
import chef from '../images/chef.jpg'
import clock from '../images/clock.jpg'

class HomeScreen extends Component{
    render(){
        return(
            <div className='homescreen_div'>
                <h1>Our Story</h1>
                <div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    </p>
                    <p>
                        into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.  
                        into electronic typesetting, remaining essentially unchanged. when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    </p>
                </div>
                <div className='row'>
                    <div className='left1'>
                        <img src={ing}/>
                    </div>
                    <div className='right1'>
                        <h2>Ingredients</h2>
                        <p>An ingredient is a substance that forms part of a mixture. For example, in cooking, recipes specify which ingredients are used to prepare a specific dish. Many commercial products contain secret ingredients that are purported to make them better than competing products.An ingredient is a substance that forms part of a mixture. For example, in cooking, recipes specify which ingredients are used to prepare a specific dish. Many commercial products contain secret ingredients that are purported to make them better than competing products.</p>
                    </div>
                    <div className='left2'>
                        <h2>Our Chef</h2>
                        <p>A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine, the director or head of a kitchen.A chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation, often focusing on a particular cuisine. The word "chef" is derived from the term chef de cuisine, the director or head of a kitchen. </p>
                    </div>
                    <div className='right2' id="mid1">
                        <img src={chef}/>
                    </div>
                    <div className='left3' id="mid2">
                        <img src={clock}/>
                    </div>
                    <div className='right3'>
                        <h2 id='last'>45 min delivery</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeScreen;
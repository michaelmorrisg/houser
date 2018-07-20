import React, { Component } from 'react'
import { Link, } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address:'',
            city: '',
            state: '',
            zip: 0,
            toDashboard: false
        }
    }
    handleName(input){
        this.setState({
            name: input
        })
    }
    handleAddress(input){
        this.setState({
            address: input
        })
    }
    handleCity(input){
        this.setState({
            city: input
        })
    }
    handleState(input){
        this.setState({
            state: input
        })
    }
    handleZip(input){
        this.setState({
            zip: input
        })
    }
    addHouse(){
        axios.post('/api/house',{
            name:this.state.name,
            address:this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip:this.state.zip})

        .then(this.setState({
            toDashboard: true
        }))
    }

    render(){
        if(this.state.toDashboard===false){
        return (
            <div>
                <input onChange={(e)=>this.handleName(e.target.value)} placeholder="name"/>
                <input onChange={(e)=>this.handleAddress(e.target.value)} placeholder="address"/>
                <input onChange={(e)=>this.handleCity(e.target.value)} placeholder="city"/>
                <input onChange={(e)=>this.handleState(e.target.value)} placeholder="state"/>
                <input onChange={(e)=>this.handleZip(e.target.value)} placeholder="zipcode"/>
               <Link to="/"><button>Cancel</button></Link>
               <button onClick={()=>this.addHouse()}>Complete</button>
            </div>
        )
        }
        else{
            return (
                <Redirect to="/"/>
            )
        }
    }
}
export default Wizard
import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            allHouses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount(){
        axios.get('/api/houses').then(response=>{
            this.setState({
                allHouses: response.data
            })
        })
    }
    getHouses(){
        axios.get('/api/houses').then(response=>{
            this.setState({
                allHouses: response.data
            })
        })
    }
    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(response=>{
            return(
                this.getHouses()
            )
        })
    }

    render(){
        return (
            <div className="dashboard-body">
            <div className="dashboard-header">
            <h2>Dashboard</h2>
            <Link to="/wizard/step1"><button>Add New Property</button></Link>
            </div>
                {this.state.allHouses.map(((element,i)=>{
                    return(
                        <House deleteHouse={this.deleteHouse} house={this.state.allHouses[i]} key={element.id}/>
                    )
                }))}
            </div>
        )
    }
}
export default Dashboard
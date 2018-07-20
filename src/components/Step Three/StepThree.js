import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            toDashboard: false
        }
    }
    addHouse(){
        axios.post('/api/house',{
            name:this.state.name,
            address:this.state.address,
            city: this.state.city,
            state: this.state.stateLocation,
            zip:this.state.zip})

        .then(this.setState({
            toDashboard: true
        }))
    }

    render(){
        return(
            <div>
                <input placeholder="Monthly Mortgage"/>
                <input placeholder="Desired Monthly Rent"/>
                <button onClick={()=>this.addHouse()}>Complete</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {name,address,city,stateLocation,zip,imgUrl,monthlyMortage,monthlyRent} = state
    return {name,address,city,stateLocation,zip,imgUrl,monthlyMortage,monthlyRent}
}
export default StepThree
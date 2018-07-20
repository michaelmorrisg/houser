import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { updateStepOne } from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address:'',
            city: '',
            stateLocation: '',
            zip: 0,
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
            stateLocation: input
        })
    }
    handleZip(input){
        this.setState({
            zip: input
        })
    }

    render(props){
        console.log(this.props)
        return(
        <div>
            <input onChange={(e)=>this.handleName(e.target.value)} placeholder="name"/>
            <input onChange={(e)=>this.handleAddress(e.target.value)} placeholder="address"/>
            <input onChange={(e)=>this.handleCity(e.target.value)} placeholder="city"/>
            <input onChange={(e)=>this.handleState(e.target.value)} placeholder="state"/>
            <input onChange={(e)=>this.handleZip(e.target.value)} placeholder="zipcode"/>
            <Link to="/wizard/step2"><button onClick={(e)=>this.props.updateStepOne(
                this.state.name,this.state.address,this.state.city,this.state.stateLocation,this.state.zip
            )}>Next Step</button></Link>
        </div>
        )
    }
}
function mapStateToProps(state){
    const {name,address,city,stateLocation,zip}=state
    return {name,address,city,stateLocation,zip}
}
export default connect(mapStateToProps,{updateStepOne})(StepOne)
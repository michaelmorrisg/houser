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
            zip: ''
        }
    }
    componentDidMount(){
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            stateLocation: this.props.stateLocation,
            zip: this.props.zip
        })
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
        <div className="step-one">
            <input onChange={(e)=>this.handleName(e.target.value)} placeholder="name" value={this.state.name}/>
            <br/><input onChange={(e)=>this.handleAddress(e.target.value)} placeholder="address"value={this.state.address}/>
            <br/><input onChange={(e)=>this.handleCity(e.target.value)} placeholder="city"value={this.state.city}/>
            <br/><input onChange={(e)=>this.handleState(e.target.value)} placeholder="state"value={this.state.stateLocation}/>
            <br/><input onChange={(e)=>this.handleZip(e.target.value)} placeholder="zipcode"value={this.state.zip}/>
            <br/><Link to="/wizard/step2"><button onClick={(e)=>this.props.updateStepOne(
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
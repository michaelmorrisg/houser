import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateStepThree } from '../../ducks/reducer'
import { Link } from 'react-router-dom'

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            toDashboard: false,
            monthlyMortage: 0,
            monthlyRent: 0
        }
    }
    componentDidMount(){
        this.setState({
            monthlyMortage: this.props.monthlyMortage,
            monthlyRent: this.props.monthlyRent
        })
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
    handleRent(input){
        this.setState({
            monthlyRent: input
        })
    }
    handleMortgage(input){
        this.setState({
            monthlyMortage: input
        })
    }
    completeFunctions(mortgage,rent){
        this.props.updateStepThree(mortgage,rent);
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleMortgage(e.target.value)} placeholder="Monthly Mortgage"/>
                <input onChange={(e)=>this.handleRent(e.target.value)}placeholder="Desired Monthly Rent"/>
                <Link to="/wizard/step2"><button>Previous Step</button></Link>
                <button onClick={()=>this.completeFunctions(this.state.monthlyMortage,this.state.monthlyRent)}>Complete</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {name,address,city,stateLocation,zip,imgUrl,monthlyMortage,monthlyRent} = state
    return {name,address,city,stateLocation,zip,imgUrl,monthlyMortage,monthlyRent}
}
export default connect(mapStateToProps,{updateStepThree})(StepThree)
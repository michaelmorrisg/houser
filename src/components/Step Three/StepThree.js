import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateStepThree } from '../../ducks/reducer'
import { Link, Redirect } from 'react-router-dom'
import { cancelHouse } from '../../ducks/reducer'

class StepThree extends Component {
    constructor(){
        super()
        this.state = {
            toDashboard: false,
            monthlyMortgage: 0,
            monthlyRent: 0
        }
    }
    componentDidMount(){
        this.setState({
            monthlyMortgage: this.props.monthlyMortgage,
            monthlyRent: this.props.monthlyRent
        })
    }
    addHouse(){
        console.log({
            name:this.props.name,
            address:this.props.address,
            city: this.props.city,
            state: this.props.stateLocation,
            zip:this.props.zip,
            image: this.props.imgUrl,
            monthlyMortgage: this.state.monthlyMortgage,
            monthlyRent: this.state.monthlyRent})
        axios.post('/api/house',{
            name:this.props.name,
            address:this.props.address,
            city: this.props.city,
            state: this.props.stateLocation,
            zip:this.props.zip,
            image: this.props.imgUrl,
            monthlyMortgage: this.state.monthlyMortgage,
            monthlyRent: this.state.monthlyRent})

        .then(this.setState({
            toDashboard: true
        }));
        
    }
    handleRent(input){
        this.setState({
            monthlyRent: input
        })
    }
    handleMortgage(input){
        this.setState({
            monthlyMortgage: input
        })
    }
    completeFunctions(mortgage,rent){
        this.props.updateStepThree(mortgage,rent);
        this.addHouse();
        this.props.cancelHouse();

    }

    render(){
        if(this.state.toDashboard===false){
        return(
            <div>
                <input onChange={(e)=>this.handleMortgage(e.target.value)} placeholder="Monthly Mortgage"/>
                <input onChange={(e)=>this.handleRent(e.target.value)}placeholder="Desired Monthly Rent"/>
                <Link to="/wizard/step2"><button>Previous Step</button></Link>
                <button onClick={()=>this.completeFunctions(this.state.monthlyMortgage,this.state.monthlyRent)}>Complete</button>
            </div>
        )
    } else{
        return (
            <Redirect to="/"/>
        )
    }
    }
}
function mapStateToProps(state){
    const {name,address,city,stateLocation,zip,imgUrl,monthlyMortgage,monthlyRent} = state
    return {name,address,city,stateLocation,zip,imgUrl,monthlyMortgage,monthlyRent}
}
export default connect(mapStateToProps,{updateStepThree,cancelHouse})(StepThree)
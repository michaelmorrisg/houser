import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import StepOne from '../Step One/StepOne'
import StepTwo from '../Step Two/StepTwo'
import StepThree from '../Step Three/StepThree'
import { connect } from 'react-redux'
import {cancelHouse} from '../../ducks/reducer'

class Wizard extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(props){

        return (
            <div>
               <Link to="/"><button onClick={(e)=>{this.props.cancelHouse()}}>Cancel</button></Link>
               <Switch>
            <Route path="/wizard/step1" component={StepOne} />
            <Route path="/wizard/step2" component={StepTwo}/>
            <Route path="/wizard/step3" component={StepThree}/>
        </Switch>
            </div>
        )
}
}
export default connect(null,{cancelHouse})(Wizard)
// else{
//     return (
//         <Redirect to="/"/>
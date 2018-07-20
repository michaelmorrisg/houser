import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import StepOne from '../Step One/StepOne'
import StepTwo from '../Step Two/StepTwo'
import StepThree from '../Step Three/StepThree'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
        }
    }

    render(){

        return (
            <div>
               <Link to="/"><button>Cancel</button></Link>
               <Switch>
            <Route path="/wizard/step1" component={StepOne} />
            <Route path="/wizard/step2" component={StepTwo}/>
            <Route path="/wizard/step3" component={StepThree}/>
        </Switch>
            </div>
        )
}
}

// else{
//     return (
//         <Redirect to="/"/>
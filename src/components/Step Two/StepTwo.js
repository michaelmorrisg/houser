import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateStepTwo} from '../../ducks/reducer'
class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            imgUrl: ''
        }
    }

handleUpdate(input){
    this.setState({
        imgUrl: input
    })
}

    render(props){
        return(
            <div>
                <input onChange={(e)=>this.handleUpdate(e.target.value)} placeholder="Image URL"/>
                <Link to="/wizard/step3"><button onClick={(e)=>this.props.updateStepTwo(this.state.imgUrl)}>Next Step</button></Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {imgUrl} = state
    return {imgUrl}
}
export default connect(mapStateToProps,{updateStepTwo})(StepTwo)
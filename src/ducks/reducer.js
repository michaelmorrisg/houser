const initialState = {
    name: '',
    address:'',
    city: '',
    stateLocation: '',
    zip: '',
    imgUrl: '',
    monthlyMortage: '',
    monthlyRent: ''
}

const UPDATE_STEP_ONE = "UPDATE_STEP_ONE"
const UPDATE_STEP_TWO = "UPDATE_STEP_TWO"
const UPDATE_STEP_THREE = "UPDATE_STEP_THREE"
const CANCEL_HOUSE = "CANCEL_HOUSE"


function reducer(state=initialState, action){
    switch (action.type){
        case UPDATE_STEP_ONE:
            return Object.assign({},state,{
                name:action.payload.name,
                address:action.payload.address,
                city: action.payload.city,
                stateLocation: action.payload.stateLocation,
                zip: action.payload.zip
            })
        case UPDATE_STEP_TWO:
            return Object.assign({},state,{imgUrl: action.payload})
        case UPDATE_STEP_THREE:
            return Object.assign({},state,{
                monthlyMortage: action.payload.monthlyMortage,
                monthlyRent: action.payload.monthlyRent
            })
        case CANCEL_HOUSE:
            return Object.assign({},initialState)
        default: return state
    }
}

export function updateStepOne(name,address,city,stateLocation,zip){
    return{
        type: UPDATE_STEP_ONE,
        payload: {name,address,city,stateLocation,zip}
}
}
export function updateStepTwo(imgUrl){
    return{
        type: UPDATE_STEP_TWO,
        payload: imgUrl
    }
}
export function updateStepThree(monthlyMortage,monthlyRent){
    return{
        type: UPDATE_STEP_THREE,
        payload: {monthlyMortage,monthlyRent}
    }
}
export function cancelHouse(){
    return{
        type: CANCEL_HOUSE,
        payload: initialState
    }
}

export default reducer



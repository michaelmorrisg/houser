const initialState = {
    name: '',
    address:'',
    city: '',
    stateLocation: '',
    zip: 0,
    imgUrl: '',
    monthlyMortage: 0,
    monthlyRent: 0
}

const UPDATE_STEP_ONE = "UPDATE_STEP_ONE"
const UPDATE_STEP_TWO = "UPDATE_STEP_TWO"


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

export default reducer



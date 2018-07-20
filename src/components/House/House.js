import React from 'react'

export default function House(props){
    return(
        <div className="house-body">
            <div className="house-image-div">
                <div><img className="house-image-image" src={props.house.image}/></div>
            </div>
            <div className="house-details">
                <div>Property Name: {props.house.name}</div>
                <div>Address: {props.house.address}</div>
                <div>City: {props.house.city}</div>
                <div>State: {props.house.state}</div>
                <div>Zip: {props.house.zip}</div>
            </div>
            <div>    
                <div>Mortgage: ${props.house.monthly_mortgage}</div>
                <div>Rent:{props.house.desired_rent}</div>   
            </div>
            <div className="delete-button-div">
                <button className="delete-button" onClick={()=>props.deleteHouse(props.house.id)}>X</button>
            </div>
            <p></p>
            {console.log(props.house)}
        </div>
    )
}
import React from 'react'

export default function House(props){
    return(
        <div className="house-body">
            <div className="house-image-div">
                <div><img className="house-image-image" src={props.house.image}/></div>
            </div>
            <div className="house-details">
            <br/>
                <div>Property Name: {props.house.name}</div><br/>
                <div>Address: {props.house.address}</div><br/>
                <div>City: {props.house.city}</div><br/>
                <div>State: {props.house.state}</div><br/>
                <div>Zip: {props.house.zip}</div>
            </div>
            <div>   
                <br/> 
                <div>Mortgage: ${props.house.monthly_mortgage}</div><br/>
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
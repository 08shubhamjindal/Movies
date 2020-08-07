import React from 'react'
import {Link} from 'react-router-dom'

class DetailsPage extends React.Component{
    render(){
        console.log(this.props.location.data)
        return (
            <div>
            <Link to='/'>Home</Link>
             <p>I am here</p> 
             </div>
        )
    }
}

export default DetailsPage
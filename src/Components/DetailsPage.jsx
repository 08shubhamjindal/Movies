import React from 'react'
import {Link} from 'react-router-dom'
import { Space, Card, Button } from 'antd';
import 'antd/dist/antd.css';
class DetailsPage extends React.Component{
showGeners(){
        const genersData = this.props.location.data.data['genres'].split('|');
        return genersData.map((single)=>{
                 
          return (
            <Link to = {{
                pathname : '/',
                filter : {single}
            }}>
            <Button key={single} >{single}</Button>
            </Link>  
          )
        })
}
    render(){
        const aaa = this.props.location.data.data
        //console.log(aaa.data)
        return (
            <div>
            <Link to='/'>Home</Link>
            <Space direction="vertical">
              <Card title={aaa['movie_title']}  style={{ width: 400 }}>
                <p>{aaa['director_name']}</p>
                <p>{aaa['actor_1_name']}</p>
                <p>{aaa['actor_2_name']}</p>
                <p>{aaa['budget'] ?  aaa['budget'] : 'Not Available'}</p>
                <p>{this.showGeners()}</p>
              </Card>
            </Space>
             </div>
        )
    }
}

export default DetailsPage
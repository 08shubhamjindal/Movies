import React from 'react'
import { Space, Card, Button } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
class CardClass extends React.Component{
  constructor(props){
    super(props);
    this.goToIMDB = this.goToIMDB.bind(this)
  }

  goToIMDB(){
    window.open(this.props.data["movie_imdb_link"], '_blank');
  }

  // setFilter(e){
  //   console.log(e)
  // }

  showGeners(){
    const genersData = this.props.data['genres'].split('|');
    return genersData.map((single)=>{
      return <Button key={single} onClick={()=>this.props.setFilter(single)}>{single}</Button>;
    })
  }
  
  render(){
        return (
            <Space direction="vertical">
              <Card title={this.props.data['movie_title']} extra={<Button onClick={this.goToIMDB}type="primary">IMDB</Button>} style={{ width: 400 }}>
                <p>{this.props.data['director_name']}</p>
                <p>{this.props.data['actor_1_name']}</p>
                <p>{this.props.data['actor_2_name']}</p>
                <p>{ this.props.data['budget'] ?  this.props.data['budget'] : 'Not Available'}</p>
                <p>{this.showGeners()}</p>
                <Link to={`/${this.props.data['movie_title']}`}>
                <Button type="primary">Get Details</Button>
                </Link>
              </Card>
            </Space>
          );
    }
}
export default CardClass
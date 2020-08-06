import React from 'react'
import { Space, Card, Button } from 'antd';
import 'antd/dist/antd.css';

class CardClass extends React.Component{
    render(){
        return (
            <Space direction="vertical">
              <Card title={this.props.data['movie_title']} extra={<Button type="primary">IMDB</Button>} style={{ width: 400 }}>
                <p>{this.props.data['director_name']}</p>
                <p>{this.props.data['actor_1_name']}</p>
                <p>{this.props.data['actor_2_name']}</p>
                <p>{ this.props.data['budget'] ?  this.props.data['budget'] : 'Not Available'}</p>
                <p>{ this.props.data['genres']}</p>
              </Card>
            </Space>
          );
    }
}
export default CardClass
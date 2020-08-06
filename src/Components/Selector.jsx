import React from 'react'
import { Select, Button } from 'antd';

const { Option } = Select;

const values = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Thriller', 'Documentary', 'Romance', 'Comedy', 'Musical'];

const children = [];
// var selectedValue = [];
for(let i=0; i<values.length; i++){
children.push(<Option key={values[i]}>{values[i]}</Option>);
}

class Selector extends React.Component{

constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.filterMethod = this.filterMethod.bind(this);
}

handleChange(value) {
  //selectedValue = value; 
  this.props.optioValues(value)  // this.props.optioValues(selectedValue)
}

// filterMethod(){
//     this.props.optioValues(selectedValue)  // this Commented Code is Based on Click
// }

render(){
        return(
            <div>
            <Select mode="tags" style={{ width: '40%' }} onChange={this.handleChange} tokenSeparators={[',']}>
            {children}</Select>
            {/* <Button type="primary" onClick = {this.filterMethod}>Filter</Button> */}
            </div>

        )
    }
}

export default Selector
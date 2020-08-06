import React from 'react'
import CardClass from './Card'
import Selector from './Selector'

class Movies extends React.Component{
constructor(props){
    super(props);
    this.state = {
        data : [],
        currentValue : 6,
        selectedData : []
    }
    this.loadMore = this.loadMore.bind(this)
    this.optioValues = this.optioValues.bind(this)
}
async componentWillMount(){
    fetch(`http://starlord.hackerearth.com/movies`)
    .then(res => res.json())
    .then(json => this.setState(()=>{
         return {
             data : json
         }
    }));
}

loadMore(){
    this.setState((prev)=>{
        return {
            currentValue : prev.currentValue + 6
        }
    })
}

renderCard(){
    const data = this.state.data;
    const selectedData = this.state.selectedData;
    const currentValue = this.state.currentValue;
    var currentData = [];
    for(let i=0; i<data.length; i++){
          var flag=0;
          const genresValue = data[i]["genres"].split("|");
          for(let j=0; j<selectedData.length; j++){
               if(genresValue.includes(selectedData[j])===false){ flag = 1; break}
          }

          if(flag===0 && currentData.length<currentValue){
              console.log(data[i])
              currentData.push(data[i]);
          }else if(currentData.length===currentValue){
              break;
          }
    }

   // const currentData = this.state.data.slice(0, Math.min(this.state.currentValue, this.state.data.length))
    return currentData.map((currSingleData, index)=>{
          return <CardClass key={index} data={currentData[index]} setFilter ={this.setFilter}/>
    })
}

optioValues(value){
        this.setState(()=>{
            return{
                selectedData : value,
                currentValue : 6
            }
        })
}
setFilter(value){
console.log(value)
}
render(){
        return(
            <div>
                <Selector optioValues={this.optioValues}/>
                {this.renderCard()}
                <br/>
                <button onClick={this.loadMore}>Load More</button>
            </div>
        )
    }
}

export default Movies
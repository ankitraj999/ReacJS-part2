import React from 'react'

class EventDemo1 extends React.Component{
    age=this.props.age;
    callEvent(){
        
        
        this.age=this.age+5
        console.log("incrementing age",this.age)
    }
    render(){
        return(
            <button onClick={()=>this.callEvent()}>Event Click me</button>
        )
        
    }
}
export default EventDemo1;
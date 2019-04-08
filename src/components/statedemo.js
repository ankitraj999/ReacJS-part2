import React from 'react'
class StateDemo1 extends React.Component{
    counter=this.props.message
    constructor(props){
        super(props);
        this.state={
            message:this.props.message
        }
    }

    changeMessage(){
        this.setState({
            // message:"awesome ankit"
            message:this.counter=this.counter+1
        })

    }

    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>change</button>
            </div>
        )
    }
}
export default StateDemo1
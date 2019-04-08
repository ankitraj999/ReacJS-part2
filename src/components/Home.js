import React,{Component} from 'react'

class Home extends Component{

    render(){
        return(
            <div>
            <h1>I am from home</h1>
            <img src={require('./image.jpg')}></img>
            </div>
        )
    }
}

export default Home
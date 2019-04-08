import React,{Component} from 'react'
class Welcom extends Component{
    render(){
        let message=''
        if(true){
            message="hello, friends"
        }

        return(
            
            <div>
            <h1>hello from welcome component</h1>
            <p>{2+2}</p>
            <p>{message}</p>
            <button className="btn btn-primary">Click</button>
            </div>
        )
        
    }
}
export default Welcom;
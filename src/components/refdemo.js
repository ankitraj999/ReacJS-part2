import React,{Component} from 'react'

class RefsDemo1 extends Component{
    constructor(props){
        super()
    //step 1:
        this.inputRef=React.createRef()
    }

    //step 3:
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    render(){
        return(
            <div>
                {/* //step 2: */}
            <input type='text' ref={this.inputRef}/>
            <button>click</button>

            </div>
        )
    }
}
export default RefsDemo1
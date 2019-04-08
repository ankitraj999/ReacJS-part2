import React from 'react'
class NumListComp extends React.Component{
    render(){
        return(
            <div>
            <ul>
                {/* <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li> */}
                {this.props.number.map((n)=><li key={n}>{n}</li> )}
            </ul>
            
             
           
             {this.props.name1.map((n)=><div><h2>{n.name}</h2><hr></hr><ul> {n.hobbies.map((n)=><li key={n}>{n}</li>)}</ul> </div>)}
         
         </div>
        )
       
    }
}

export default NumListComp;
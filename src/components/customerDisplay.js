import React from 'react'
class CustomerDisplay1 extends React.Component{
    render(){
        const user=this.props.userData;
        return(
            <div>
                <h1>Display the Customer Information</h1>
                <p>hi ankit you are awesome buddy</p>
                <p>{user.userName}</p>
                <p>{user.userEmail}</p>
                <p>{user.userMobile}</p>
                <p>{user.userAddress}</p>
                <p>{user.userDescription}</p>
                <p>{user.userDateOfVisit}</p>
                <button onClick={(e)=>this.props.deleteCustomer()}>delete</button>
            </div>
        )
    }
}
export default CustomerDisplay1
import React from 'react'
import CustomerDisplay1 from './customerDisplay'
class Addlist extends React.Component{
    constructor(){
        super();
        this.state={
            user:{
                userName:'',
                userEmail:'',
                userMobile:'',
                userAddress:'',
                userDescription:'',
                userDateOfVisit:''
            },
            display:false
        }
    }
    //step4
    handelsubmit(e){
        e.preventDefault();
        alert(`${this.state.user.userName}`)
        alert(`${this.state.user.userEmail}`)
        alert(`${this.state.user.userMobile}`)
        alert(`${this.state.user.userAddress}`)
        alert(`${this.state.user.userDescription}`)
        alert(`${this.state.user.userDateOfVisit}`)
        console.log();
        this.setState({display:true})
    }
    updateState(ctrl,value){
        const {user}=this.state;
        user[ctrl]=value;
        this.setState({user});
        
    }
    resetState(){
        this.setState={
            user:{
                userName:'',
                userEmail:'',
                userMobile:'',
                userAddress:'',
                userDescription:'',
                userDateOfVisit:''
            },
            display:false
        }
    }
    render(){
        const {user}=this.state;
        return(
            <div>
                <h1>state Add and Delete</h1>
                <form onSubmit={(e)=>this.handelsubmit(e)}>
                    <label>
                        User Name
                    </label>
                    <input type="text" value={user.userName} onChange={(e)=>this.updateState('userName',e.currentTarget.value)}/><br/>
                    <label>
                        Email
                    </label>
                    <input type="email" value={user.userEmail} onChange={(e)=>this.updateState('userEmail',e.currentTarget.value)}/><br/>
                    <label>
                        Mobile
                    </label>
                    <input type="text" value={user.userMobile} onChange={(e)=>this.updateState('userMobile',e.currentTarget.value)}/><br/>
                    <label>
                        Address
                    </label>
                    <input type="text" value={user.userAddress} onChange={(e)=>this.updateState('userAddress',e.currentTarget.value)}/><br/>
                    <label>
                        Discription
                    </label>
                    <input type="text" value={user.userDescription} onChange={(e)=>this.updateState('userDescription',e.currentTarget.value)}/><br/>
                    <label>
                        User Date of Visit
                    </label>
                    <input type="text" value={user.userDateOfVisit} onChange={(e)=>this.updateState('userDateOfVisit',e.currentTarget.value)}/><br/>
                    <button type="submit">Submit</button>

                </form>
                {
                    this.state.display? <CustomerDisplay1 userData={this.state.user} deleteCustomer={(e)=>this.resetState()}/>:
                    null
                }
               
            </div>
        )
        
    }
}

export default Addlist
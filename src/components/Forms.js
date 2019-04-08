import React from 'react'
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            topic: 'AngularJS'

        }
    }
    handelSubmit = (e) => {
        console.log(this.state.firstname)
        console.log(this.state.lastname)
        console.log(this.state.topic)
        e.preventDefault();
    }
    handelChange = (event) => {
        this.setState({
            firstname: event.target.value,
            

        })
        
    }
    handelChangelast = (event) => {
        this.setState({
            lastname: event.target.value,

        })
     
    }
    handelChangetopic = (event) => {
        this.setState({
            topic: event.target.value,

        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.firstname.toUpperCase()}</h1>
                <h1>I am from form</h1>
                <form onSubmit={this.handelSubmit}>
                    <div>
                        <label>First Name</label>
                        <input type="text" value={this.state.firstname} onChange={this.handelChange}></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastname} onChange={this.handelChangelast}></input>
                    </div>
                    <div>
                        <label>Topics to study</label>
                        <select value={this.state.topic} onChange={this.handelChangetopic}>
                            <option value='AngularJS'>Angular</option>
                            <option value='ReactJS'>React</option>
                            <option value='NodeJS'>Node</option>
                            <option value='ExpressJS'>Express JS</option>
                        </select>
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Forms;
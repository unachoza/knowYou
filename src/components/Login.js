import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: e.target.value, password: e.target.value})
        console.log("state is", this.state)
    }
    handleEmailChange = (e) => { 
        e.preventDefault();
        
        this.setState( { email: e.target.value})
        console.log(this.state)

    }
    handlePasswordChange = (e) => { 
        e.preventDefault();
        
        this.setState( { password: e.target.value})
        console.log(this.state)
    }
    render(){
        return( 
            <div>
                <form noValidate autoComplete="off">
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={(e) =>  this.handleEmailChange(e)}
                    />
                <br></br>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={(e) =>  this.handlePasswordChange(e)}
                    />
                    <br></br>
                    <button onClick={(e) => this.handleSubmit(e)}> Submit</button>
                    
                </form>

            
            </div>
        )
    }
}

export default Login 
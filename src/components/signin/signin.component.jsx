import React, { Component } from 'react'
import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class Signin extends Component {
    constructor(props){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    onchange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render() {
        return (
            <div className="sign-in">
                <h3>I already have an account</h3>
                <span>sign in with your email and password</span>
                <form><br/>
                <label>EMAIL</label>
                <br/>
                <input
                 name="email"
                 type="email" 
                 value={this.state.email} 
                 onChange={this.onchange}
                 required />
                 <br/>
                <label>PASSWORD</label>
                <br/>
                <input 
                 name="password" 
                 type="password" 
                 value={this.state.password} 
                 onChange={this.onchange}
                 required />
                 <br/>
                <input type="submit" value="signin"/>
                <input type="submit" value="signin with gooogle" onClick={signInWithGoogle}/>
                <br/>
                </form>
            </div>
        )
    }
}

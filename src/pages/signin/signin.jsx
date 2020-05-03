import React from 'react'
import './sign.style.scss'
import '../../components/signin/signin.component'
import Signin from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup'
const Signinpage=()=>(
    <div>
    <h2 style={{textAlign:"center"}}>this is sigin in page</h2>
    <div> <Signin /></div><div><SignUp /></div>
    </div>
)
export default Signinpage;
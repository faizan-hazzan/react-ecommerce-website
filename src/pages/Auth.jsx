import { useState } from "react"



export default function Auth (){
const [mode, setMode] = useState('signup')

    return (
    <div className="page"> 
    <div className="container">
        <div className="auth-container">
            <h1 > {mode === 'signup'? 'Sign Up': 'Login'} </h1>
            <form className="auth-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-input" type="email" />
                </div>
                 <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-input" type="password"/> 
                </div>
                <button className="btn btn-primary btn-large" type="submit">{mode === 'signup'? 'Sign Up': 'Login'}</button>
            </form>
            <div className="auth-switch">
              { mode === 'signup'?( 
                <p>Already Have an Accoutn? <span className="auth-link" onClick={()=> setMode('login')}>Login</span></p>):(
                <p>Don't Have an Accoutn? <span className="auth-link" onClick={()=> setMode('signup')}>Sign Up</span></p>)
                }
            </div>
        </div>
    </div>
    </div>
    )
}
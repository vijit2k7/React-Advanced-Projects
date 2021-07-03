import React,{useState} from 'react'
import { Route } from 'react-router-dom'
import Mailfunction from './Mail-function/Mailfunction';

const users = [
    {
      label: "Vijit",
      value: "Vijit",
    },
    {
      label: "Tina",
      value: "Tina",
    },
    {
      label: "Robert",
      value: "Robert",
    },
    {
      label: "Peter",
      value: "Peter",
    },
  ];
function Login() {

    const [user,setUser]=useState("");
    const [flag,setFlag]=useState(false);
    console.log("flag in login",flag)
    function onClickHandler()
    {
        console.log('history',flag)
        setFlag(!flag)
        //history.push('/home')
    }

    function handleUserChange(e){
        console.log("User Selected!!",e.target.value);
        setUser(e.target.value);
    }
    return (
        <div>
            {!flag}
        {(!flag)&&(<form>
                <h3>Sign In</h3>

                <div className="form-group" style={{marginBottom:20}}>
                    <label>User List</label>

                        <select className="form-control" value={user} onChange={handleUserChange}>
                            {users.map((option) => (
                            <option value={option.value}>{option.label}</option>
                            ))}
                        </select>  
                </div>


                <div className="form-group" style={{marginBottom:20}}>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={onClickHandler}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>)}
            {user}
            {flag&&

                <Mailfunction user={user}></Mailfunction>
}
            </div>
    )
}

export default Login

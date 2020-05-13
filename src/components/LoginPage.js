import React from 'react'
import { connect } from 'react-redux'
import {loginRequest} from '../Redux/Action'
import {Redirect} from 'react-router-dom'

export class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            isdata:false
        }
    }

    // Setting the Input Value
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //onSubmit Dispatch Login Action
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({isdata : true})
        this.props.loginRequest(this.state)
    }

    render(){
        let error = this.props.errorMsg
        if(this.props.loginStatus){
            return <Redirect to = '/employeeList'/> 
        }
        return(
            <div className="container w-50">
                <h2 className="text-center text-info display-4 font-weight-bold shadow">Login Page</h2>
                <div className="row">
                    <div className="col-10 offset-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 my-5 border border-dark py-3 rounded">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="h5">UserName</label>
                                <input type="text" name="username" value ={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter the Username"/>
                            </div>
                            <div className="form-group">
                                <label className="h5">Password</label>
                                <input type="password" name="password" value ={this.state.password} onChange={this.handleChange} className="form-control" placeholder="Enter the Password"/>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary mt-3">SUBMIT</button>
                            </div>
                        </form>
                        {this.state.isdata && !this.props.loginStatus && <p className="text-center text-danger py-3">{error}</p>}
                    </div>
                </div>
            </div>
        )
    }
}

//Accessing Data from store
const mapStateToProps = (state) => ({
    auth : state.login_data,
    loginStatus : state.isLogged,
    errorMsg : state.errorMsg
})

//Dispatching Action
const mapDispatchToProps = (dispatch) => ({
    loginRequest : (payload) => dispatch(loginRequest(payload)),
})

export default connect (mapStateToProps , mapDispatchToProps)(LoginPage)

import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../Redux/Action'
import { Link} from 'react-router-dom'

export class EmployeeList extends React.Component{
    
    handleClick = () => {
        this.props.logout()
    }
    render(){
        return(
            <div className="container">
                <div className="float-right">
                    <Link to='/' onClick={this.handleClick} className="btn btn-danger my-4 px-5">Logout</Link>
                </div>

                <div className="col-md-12 table-responsive table">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.Employee_data.map(element => 
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.age}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phoneNo}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = (state) => ({
    Employee_data : state.user,
    loginStatus : state.isLogged
})

const mapDispatchToProps = (dispatch) => ({
    logout : () => dispatch(logout())
})

export default connect (mapStateToProps , mapDispatchToProps) (EmployeeList)
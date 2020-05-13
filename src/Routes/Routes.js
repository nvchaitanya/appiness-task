import React from 'react'
import { Route , Switch} from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import EmployeeList from '../components/EmployeeList'

class Routes extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Switch>
                    <Route exact path="/" render={() => <LoginPage />}/>
                    <Route exact path = "/employeeList" render={() => <EmployeeList />}/>
                </Switch>
            </React.Fragment>
        )
    }
}
export default Routes

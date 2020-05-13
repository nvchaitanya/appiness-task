import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT} from './Action'

const initState = {
    isLogged : false,
    errorMsg : 'Invalid Username or Password',
    login_data:{
                "username":"hruday@gmail.com",
                "password" :'hruday123'
                },
    
    user:[{
                "id":1,
                "name":"test1",
                "age" : "11",
                "gender":"male",
                "email" : "test1@gmail.com",
                "phoneNo" : "9415346313"
                },
                {
                "id" : 2,
                "name":"test2",
                "age" : "12",
                "gender":"male",
                "email" : "test2@gmail.com",
                "phoneNo" : "9415346314"
                },
                {
                "id":3,
                "name":"test3",
                "age" : "13",
                "gender":"male",
                "email" : "test3@gmail.com",
                "phoneNo" : "9415346315"
                },
                {
                "id":4,
                "name":"test4",
                "age" : "14",
                "gender":"male",
                "email" : "test4@gmail.com",
                "phoneNo" : "9415346316"
                },
                {
                "id":5,
                "name":"test5",
                "age" : "15",
                "gender":"male",
                "email" : "test5@gmail.com",
                "phoneNo" : "9415346317"
                },
                {
                "id":6,
                "name":"test6",
                "age" : "16",
                "gender":"male",
                "email" : "test6@gmail.com",
                "phoneNo" : "9415346318"
                }
    ]}

const reducer = (state = initState,{type,payload}) => {
    switch(type){

        case LOGIN_REQUEST:
            // console.log(state.login_data,payload,type)
            return{
                ...state,
                isLogged : (state.login_data.username === payload.username && state.login_data.password === payload.password) ? true : false
            }

        case LOGIN_SUCCESS :
             return{
                 ...state,
                 isLogged:true,
                 errorMsg: ''
             }

        case LOGIN_FAILURE:
            return{
                ...state,
                isLogged:false,
                errorMsg : state.errorMsg
            }

        case LOGOUT:
            return{
                ...state,
                isLogged : false
            }

        default:
            return state
    }
}
export default reducer
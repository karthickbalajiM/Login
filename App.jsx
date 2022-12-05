import React from "react";
import { Component } from "react";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Customers from "./Customers";
import NavBar from "./NavBar";
import ProductList from "./ProductList";
import Student from "./Student";
import Login from "./Login"
import Register from "./Register";
import Dashboard from "./Dashboard";
import Update from './Update';

class App extends Component {
    render(){
        return(
            <React.Fragment>
                {/* <Customers/> */}
                {/* <Login/> */}
                {/* <Register/> */}
                {/* <NavBar/> */}
                {/* <ProductList/> */}
                {/* <Student/> */}
                <BrowserRouter>
                    <Routes>
                    <Route index element={<Login />} />
                    <Route path = '/edit/users/:id' element={<Update/>}/>
                        {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
                        <Route path='/Register' element={<Register/>}/>
                        <Route path="Login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
                
            </React.Fragment>
        )
    }
}

export default App;
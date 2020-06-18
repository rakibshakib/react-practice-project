import React, { useState, useEffect } from 'react';
import usersData from '../src/data/Data'
import Users from './components/users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css'
const App = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch(usersData)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, []);


    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/team">
                        <div className="container">
                            <div className="row">
                                <Users users={users}></Users>
                            </div>
                        </div>
                    </Route>
                    <Route path="/about">

                    </Route>
                    <Route path="/team">

                    </Route>
                    
                </Switch>
            </Router>
        </>
    )
}

export default App;
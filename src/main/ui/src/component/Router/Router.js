import React from 'react'
import {Switch, Route} from "react-router";
import asyncComponent from "../HOC/asyncComponents"

export default (props) => {
    let asyncExampleComponent = asyncComponent( () => import ("../Example/Example"));
    return (
        <Switch>
            <Route path = '/' component={asyncExampleComponent}/>
        </Switch>
    )
}
import React from "react";
import { Route, Switch, Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import Banner from '../page/Banner';


function Approuter(){
    const history = createBrowserHistory();


    return(
        <Router history={history}>
            <Switch>
                <Route exact path = '/' component={Banner}/>
            </Switch>
        </Router>
    )
}

export default Approuter 
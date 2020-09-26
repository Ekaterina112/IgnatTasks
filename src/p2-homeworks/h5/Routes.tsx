import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import Middle from './pages/Middle';
import Senior from './pages/Senior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
    JUNIOR: '/junior',
    MIDDLE: '/middle',
    SENIOR: '/senior'

}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут  //can be <BrowserRouter>*/}
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.MIDDLE} render={() => <Middle/>}/>
                <Route path={PATH.SENIOR} render={() => <Senior/>}/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;

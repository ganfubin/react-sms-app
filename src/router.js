import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const AsyncIndex = Loadable({
    loader: () => import('./pages/index'),
    loading: MyLoadingComponent
});

const UsersPage = () => <div>Users Page</div>;

class Routers extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={AsyncIndex}/>
                    <Route path="/users" component={UsersPage}/>
                </div>
            </BrowserRouter>
        )
    }

}

export  default Routers;
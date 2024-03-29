import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,isLoading}=useAuth();
    const adminLogIn = localStorage.getItem("AdminLogIn");
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
                 {...rest}
            render={({ location }) => 
            user.email && adminLogIn? (children) : (<Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>)

            }
        >
        </Route>
    );
};

export default AdminRoute;
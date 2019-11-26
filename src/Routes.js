import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
    Event as EventView,
    EventList as EventListView,
    SignIn as SignInView,
    SignUp as SignUpView,
    Mypage as MypageView,
    NotFound as NotFoundView
} from './views';

const Routes = () => {
    return (
        <Switch>
            
            {/* redirect to mypage */}
            <Redirect
                exact
                from="/"
                to="/mypage"
            />

            {/* page routing in main layout */}
            <RouteWithLayout
                component={MypageView}
                exact
                layout={MainLayout}
                path="/mypage"
            />
            <RouteWithLayout
                component={EventListView}
                exact
                layout={MainLayout}
                path="/events"
            />
            <RouteWithLayout
                component={EventView}
                exact
                layout={MainLayout}
                path="/event/:id"
            />

            {/* page routing in minimal layout */}
            <RouteWithLayout
                component={SignUpView}
                exact
                layout={MinimalLayout}
                path="/sign-up"
            />
            <RouteWithLayout
                component={SignInView}
                exact
                layout={MinimalLayout}
                path="/sign-in"
            />
            <RouteWithLayout
                component={NotFoundView}
                exact
                layout={MinimalLayout}
                path="/not-found"
            />

            {/* redirecting to 404 */}
            <Redirect to="/not-found" />

        </Switch>
    );
};

export default Routes;

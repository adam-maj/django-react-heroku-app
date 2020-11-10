import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SiteContainer } from './styles/main/MainStyles';
import UserProvider from './context/UserContext';
import NotificationProvider from './context/NotificationContext';

const Navbar = lazy(() => import('./components/nav/Navbar'));
const Notifications = lazy(() => import('./components/notifications/Notifications'));
const Login = lazy(() => import('./components/auth/Login'));
const Register = lazy(() => import('./components/auth/Register'));
const Home = lazy(() => import('./components/landing/Home'));

function App() {
  return (
    <SiteContainer>
      <UserProvider>
        <NotificationProvider>

          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <Notifications />
          </Suspense>

          <BrowserRouter>
            <Switch>

              <Route path="/register">
                <Suspense fallback={<div>Loading...</div>}>
                  <Register />
                </Suspense>
              </Route>

              <Route path="/login">
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              </Route>


              <Route path="/" exact>
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              </Route>

              <Route path="" exact>
                <h1>404 URL Not Found</h1>
              </Route>
              
            </Switch>
          </BrowserRouter>
        </NotificationProvider>
      </UserProvider>
    </SiteContainer>
  );
}

export default App;

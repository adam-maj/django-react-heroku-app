import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SiteContainer, Section, Heading } from './styles/main/MainStyles';
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

          <Suspense fallback={<Section />}>
            <Navbar />
          </Suspense>

          <Suspense fallback={<Section />}>
            <Notifications />
          </Suspense>

          <BrowserRouter>
            <Switch>

              <Route path="/register">
                <Suspense fallback={<Section />}>
                  <Register />
                </Suspense>
              </Route>

              <Route path="/login">
                <Suspense fallback={<Section />}>
                  <Login />
                </Suspense>
              </Route>


              <Route path="/" exact>
                <Suspense fallback={<Section />}>
                  <Home />
                </Suspense>
              </Route>

              <Route path="" exact>
                <Section>
                  <Heading>404 Not Found</Heading>
                </Section>
              </Route>
              
            </Switch>
          </BrowserRouter>
        </NotificationProvider>
      </UserProvider>
    </SiteContainer>
  );
}

export default App;

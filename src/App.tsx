import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './config/routes';
import './styles/App.scss';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

const App: React.FunctionComponent<{}> = props => {
  useEffect(() => {
  }, [])

  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            {routes.map((route, index) => {
              return (
                  <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      render={(props: RouteComponentProps<any>) => (
                          <route.component
                              name={route.name}
                              {...props}
                              {...route.props}
                          />
                      )}
                  />
              );
            })}
          </Switch>
            <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {StorageManager} from '../utilities';
import {LOGIN_PAGE} from '../../configs/constants';

const ProtectedRoute = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth || StorageManager.get('session')) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: `${LOGIN_PAGE}`,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;


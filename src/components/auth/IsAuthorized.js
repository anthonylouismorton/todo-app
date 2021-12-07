import { useContext } from 'react';
import {When} from 'react-if'
import { AuthContext } from '../../context/auth.js';

function IsAuthorized({ children, capability }) {

  const authContext = useContext(AuthContext);
  console.log(authContext.isLoggedIn)
  const isLoggedIn = authContext.isLoggedIn;
  const isAuthorized = authContext.isAuthorized(capability);
  const isOkToRender = isLoggedIn;
  console.log(isOkToRender)
  return (
    <>
      <When condition={isOkToRender}>
      {children}
      </When>
    </>
  )
}

export default IsAuthorized;

import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import Login from './components/Login';
import MainMenu from './components/MainMenu';

import ServiceFactory from './context/ServiceFactory';

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ uname, setUname ] = useState<string | undefined>();
  const [ passwd, setPasswd ] = useState<string | undefined>();

  const handleLogin = (uname: string, passwd: string) => {
  };

  useEffect(() => {
    const cookies = ServiceFactory.getCookieSvc();
    const iamSvc = ServiceFactory.getIAMSvc();
    const token = cookies.getCookie('token');

    if (token) {
      setLoggedIn(true);
    }
    else {
      if (uname && passwd) {
        iamSvc.authenticate(uname, passwd)
        .then((token) => {
          if (token) {
            cookies.setCookie('token', JSON.stringify(token));
          }
        });
      }
    }

  }, [ uname, passwd ])

  return (
    <Container>
      { loggedIn ? <MainMenu /> : <Login /> }
    </Container>
  );
}

export default App;

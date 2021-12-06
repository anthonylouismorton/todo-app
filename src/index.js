import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import SettingsProvider from './context/settings';
import AuthProvider from './context/auth.js';


class Main extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SettingsProvider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
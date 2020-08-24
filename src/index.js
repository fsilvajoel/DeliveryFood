import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './Redux/index';
import Routes from './services/Routes/routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#ea1d2c' }
  },
  status: {
    danger: 'orange'
  }
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

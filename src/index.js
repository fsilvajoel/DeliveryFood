import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary:{ main : '#000000'},
    secondary:{ main : '#ea1d2c'} ,
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import LightsTable from './Table';


const App = () => (
  <MuiThemeProvider>
    <Header />
    <LightsTable  style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  </MuiThemeProvider>
);

export default App;

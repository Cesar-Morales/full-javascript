import React, {Fragment} from 'react';  // sirve para usar jsx
import ReactDOM from 'react-dom'; // sirve para renderizar el html
import { App } from './components/App';

ReactDOM.render(
  <Fragment>
    <App/>
  </Fragment>, 
  document.getElementById('root')
);

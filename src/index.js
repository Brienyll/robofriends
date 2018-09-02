import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();

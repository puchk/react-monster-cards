import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { monsters } from './monsters';

ReactDOM.render(
	<CardList monsters={monsters}/>,
	document.getElementById('root'));
registerServiceWorker();

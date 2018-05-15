import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { monsters } from './monsters';

ReactDOM.render(
	<div>
		<Card id={monsters[0].id} name={monsters[0].name} email={monsters[0].email}/>
		<Card id={monsters[1].id} name={monsters[1].name} email={monsters[1].email}/> 
		<Card id={monsters[2].id} name={monsters[2].name} email={monsters[2].email}/>
	</div>,
		document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import CardList from './CardList';
import { monsters } from './monsters';

const App = () => {
	return (
		<div>
			<h1>Monster Cards</h1>
			<CardList monsters={monsters}/>
		</div>
	)
}

export default App;
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { monsters } from './monsters';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			monsters : monsters,
			searchfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredMonsters = this.state.monsters.filter(monster => {
			return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className='tc'>
				<h1>Monster Cards</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList monsters={filteredMonsters}/>
			</div>
		);
	}
	
}


export default App;
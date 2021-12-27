import React from 'react';
import './search.style.css';

// Code
const SearchComponent = ({ value, searchHandler }) => {
	return (
		<div className='search-component'>
			<label htmlFor='search' className='search-label'>
				Search Todos
			</label>
			<input
				onChange={(e) => searchHandler(e.target.value)}
				type='text'
				value={value}
				name='search'
				className='search-input'
				placeholder='Todo Title'
			/>
		</div>
	);
};

export default SearchComponent;

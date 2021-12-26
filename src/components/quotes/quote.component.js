import React from 'react';
import './quote.style.css';

// Code
const Quote = ({ author, quote }) => {
	return (
		<div className='quote-wrapper'>
			<q className='quote-text'>{quote}</q>
			<p className='quote-author'>- {author}</p>
		</div>
	);
};

export default Quote;

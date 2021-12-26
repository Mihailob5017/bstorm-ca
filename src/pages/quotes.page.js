import React, { useEffect } from 'react';
import './pages.style.css';
// Axios
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getQuotes } from '../redux/actions';

// Components
import Loading from '../components/loading/loading.component';
import Quote from '../components/quotes/quote.component';

// API URL
const API_URL = 'https://run.mocky.io/v3/dee319cd-aa8b-4e30-b86e-3743237fca55';

// Code
const QuotesPage = () => {
	const quotes = useSelector((state) => state.quotes);
	const dispatch = useDispatch();

	useEffect(async () => {
		// Check if there are quotes already loaded and if not --> run an API request
		if (quotes.length === 0) {
			try {
				const { data } = await axios.get(API_URL);
				dispatch(getQuotes(data['motivational_quotes']));
			} catch (error) {
				console.error(error);
			}
		}
	}, []);

	return (
		<div className='quotes-container'>
			{quotes.length ? (
				quotes.map((quote, i) => <Quote key={i} {...quote} />)
			) : (
				<Loading />
			)}
		</div>
	);
};

export default QuotesPage;

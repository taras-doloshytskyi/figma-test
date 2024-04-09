import { useState, useEffect } from 'react';
import { Quote } from '../models/Quote';

const useQuotes = () => {
	const [quotes, setQuotes] = useState<Quote[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			try {
				const mockData: Quote[] = [
					{ id: '1', amount: '$3,400', date: 'Apr 2, 24', signed: true },
					{ id: '2', amount: '$3,600', date: 'Apr 1, 24', signed: false },
					{ id: '3', amount: '$7,100', date: 'Mar 30, 24', signed: false },
					{ id: '4', amount: '$4,800', date: 'Mar 30, 24', signed: false },
					{ id: '5', amount: '$5,100', date: 'Mar 28, 24', signed: true },
					{ id: '6', amount: '$2,200', date: 'Jan 3, 24', signed: false },
				];

				const sortedQuotes = mockData.sort((a, b) => {
					if (a.signed === b.signed) {
						return new Date(b.date).getTime() - new Date(a.date).getTime();
					}
					return a.signed ? -1 : 1;
				});

				setQuotes(sortedQuotes);
				setLoading(false);
			} catch (e) {
				setError('Failed to fetch quotes');
				setLoading(false);
			}
		}, 1000); //simulate network delay
	}, []);

	return { quotes, loading, error };
};

export default useQuotes;

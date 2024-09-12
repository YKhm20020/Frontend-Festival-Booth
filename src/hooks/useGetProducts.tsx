import { useState, useEffect } from 'react';
import axios from 'axios';

type useGetProductsProps = {
	page?: string; // ページ数
	limit?: string; // 取得する成果物の数の上限
};

export const useGetProducts = ({ page, limit }: useGetProductsProps) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('/products', {
					params: {
						page: page || undefined,
						limit: limit || undefined,
					},
				});
				setData(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [page, limit]);

	return { data, loading, error };
};

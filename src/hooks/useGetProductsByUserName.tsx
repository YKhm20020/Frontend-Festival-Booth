import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProductsByUserNameProps = {
	user_name: string; // ユーザー名を指定
};

export const useGetProductsByUserName = ({ user_name }: UseGetProductsByUserNameProps) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`/products/${user_name}`);
				setData(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (user_name) {
			fetchProfile();
		}
	}, [user_name]);

	return { data, loading, error };
};

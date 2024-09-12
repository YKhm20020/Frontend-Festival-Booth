import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProductsByUserNameProps = {
	user_name: string; // ユーザー名
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
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(
						err.response.data?.message || `Failed to fetch product of ${user_name}`,
					);
				} else if (err.request) {
					// リクエストしたけど応答がない
					setError('No response from server.');
				} else {
					// その他のエラー
					setError('Error: ', err.message);
				}
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

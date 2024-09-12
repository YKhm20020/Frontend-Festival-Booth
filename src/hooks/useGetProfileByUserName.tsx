import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProfileByUserNameProps = {
	name: string; // ユーザー名
};

export const useGetProfileByName = ({ name }: UseGetProfileByUserNameProps) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);
			setError(null);

			try {
				// リクエストしたけど2xxの範囲外
				const response = await axios.get(`/profiles/${name}`);
				setData(response.data);
			} catch (err) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to fetch profile');
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

		if (name) {
			fetchProfile();
		}
	}, [name]);

	return { data, loading, error };
};

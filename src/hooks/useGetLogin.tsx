import { useState, useEffect } from 'react';
import axios from 'axios';

type LoginData = {
	user_name: string; // ユーザー名
	password: string; // パスワード (1文字以上50文字以下)
};

export const useGetLogin = () => {
	const [data, setData] = useState<LoginData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('http://localhost:8080/login');
				setData(response.data);
				console.log(response);
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// リクエストしたけど2xxの範囲外
						setError(err.response.data?.message || 'Failed to fetch login');
					} else if (err.request) {
						// リクエストしたけど応答がない
						setError('No response from server.');
					} else {
						// その他のエラー
						setError(`Error: ${err.message}`);
					}
				} else {
					// axios 以外のエラーハンドリング
					setError('An unexpected error occurred.');
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	});

	return { data, loading, error };
};

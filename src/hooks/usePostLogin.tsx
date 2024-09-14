import { useState } from 'react';
import axios from 'axios';

type LoginData = {
	name: string; // ユーザー名
	password: string; // パスワード (1文字以上50文字以下)
};

export const usePostLogin = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const postLogin = async (loginData: LoginData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post('http://localhost:8080/login', loginData);
			if (response.status === 200 || response.status === 201) {
                setSuccess(true); // 成功時
                console.log(response);
			}
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to post login');
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

	return { postLogin, loading, error, success };
};

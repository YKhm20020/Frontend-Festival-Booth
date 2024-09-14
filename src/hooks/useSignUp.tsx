import { useState } from 'react';
import axios from 'axios';

type SignUpData = {
	user_name: string; // ユーザー名
	password: string; // パスワード (1文字以上50文字以下)
};

export const useSignUp = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const signUp = async (signUpData: SignUpData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post('http://localhost:8080/accounts', signUpData);
			if (response.status === 200 || response.status === 201) {
				setSuccess(true); // 成功時
			}
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to signUp');
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

	return { signUp, loading, error, success };
};

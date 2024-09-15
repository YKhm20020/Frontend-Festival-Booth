import { useState } from 'react';
import axios from 'axios';

type AnswersData = {
	answer: number;
};

export const usePostAnswers = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const postAnswers = async (answersData: AnswersData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BASE_URL}/answers`,
				answersData,
				{ withCredentials: true },
			);
			if (response.status === 200 || response.status === 201) {
				setSuccess(true);
			}
			console.log(answersData);
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to post profile');
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

	return { postAnswers, loading, error, success };
};

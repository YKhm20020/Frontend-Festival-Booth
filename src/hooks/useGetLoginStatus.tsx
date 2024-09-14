import { useState, useEffect } from 'react';
import axios from 'axios';

// カスタムフック
export const useGetLoginStatus = () => {
	const [success, setSuccess] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchStatus = async () => {
			setLoading(true);

			try {
				const response = await axios.get('/login');
				if (response.status === 200) {
					// サクセスと判断できる場合
					setSuccess(true); // ログイン成功
				}
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// 2xx以外のレスポンスが返された場合
						setError(err.response.data?.message || 'Failed to fetch login status.');
					} else if (err.request) {
						// リクエストが行われたが、応答がない場合
						setError('No response from server.');
					} else {
						// その他のエラー
						setError(`Error: ${err.message}`);
					}
				} else {
					// axios以外のエラーハンドリング
					setError('An unexpected error occurred.');
				}
			} finally {
				setLoading(false);
			}
		};

		// フックがマウントされた時にログイン状態を取得
		fetchStatus();
	}, []);

	return { success, loading, error };
};

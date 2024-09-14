import { useState } from 'react';
import axios from 'axios';

type ProductData = {
	user_name: string; // ユーザー名
	title: string; // タイトル (1文字以上50文字以下)
	url: string; // 成果物のURL
	description?: string; // 成果物についての説明 (任意入力、1文字以上200文字以下)
};

export const usePostProduct = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const postProduct = async (productData: ProductData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BASE_URL}/products`,
				productData,
				{ withCredentials: true },
			);
			if (response.status === 200 || response.status === 201) {
				setSuccess(true); // 成功時
			}
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to post product');
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

	return { postProduct, loading, error, success };
};

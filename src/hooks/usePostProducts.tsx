import { useState } from 'react';
import axios from 'axios';

type ProductData = {
	user_name: string; // ユーザー名
	title: string; // タイトル (1文字以上50文字以下)
	url: string; // 成果物のURL
	description?: string; // 成果物についての説明 (任意入力、1文字以上200文字以下)
};

export const usePostProducts = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const postProduct = async (productData: ProductData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post('/products', productData);
			if (response.status === 200 || response.status === 201) {
				setSuccess(true); // 成功時
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return { postProduct, loading, error, success };
};

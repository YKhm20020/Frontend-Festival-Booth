import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProductByUserNameProps = {
	user_name: string; // ユーザー名
};

type ProductData = {
	user_name: string; // ユーザー名
	title: string; // タイトル (1文字以上50文字以下)
	url: string; // 成果物のURL
	description?: string; // 成果物についての説明 (任意入力、1文字以上200文字以下)
};

export const useGetProductByUserName = ({ user_name }: UseGetProductByUserNameProps) => {
	const [data, setData] = useState<ProductData | null>(null);
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

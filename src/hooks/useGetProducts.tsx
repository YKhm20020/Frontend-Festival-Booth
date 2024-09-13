import { useState, useEffect } from 'react';
import axios from 'axios';

type useGetProductsProps = {
	page?: string; // ページ数
	limit?: string; // 取得する成果物の数の上限
};

type ProductData = {
	user_name: string; // ユーザー名
	title: string; // タイトル (1文字以上50文字以下)
	url: string; // 成果物のURL
	description?: string; // 成果物についての説明 (任意入力、1文字以上200文字以下)
};

export const useGetProducts = ({ page, limit }: useGetProductsProps) => {
	const [data, setData] = useState<ProductData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('http://localhost:8080/products', {
					params: {
						page: page || undefined,
						limit: limit || undefined,
					},
				});
				setData(response.data);
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// リクエストしたけど2xxの範囲外
						setError(err.response.data?.message || 'Failed to fetch products');
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
	}, [page, limit]);

	return { data, loading, error };
};

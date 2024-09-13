import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetCommentsProps = {
	product_id: string; // 成果物ごとに一意なID
};

type CommentData = {
	id: string; // コメントごとに一意なID
	product_id: string; // 成果物ごとに一意なID
	message: string; // コメントの内容
};

// カスタムフック
export const useGetComments = (productId: UseGetCommentsProps) => {
	const [comments, setComments] = useState<CommentData[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchComments = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await axios.get(`/comments/${productId}`);
				setComments(response.data);
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// リクエストしたけど2xxの範囲外
						setError(err.response.data?.message || 'Failed to fetch comments');
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

		fetchComments();
	}, [productId]);

	return { comments, loading, error };
};

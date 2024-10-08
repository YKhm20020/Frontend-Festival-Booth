import { useState } from 'react';
import axios from 'axios';

type PostCommentData = {
	product_id: number; // 成果物ごとに一意なID
	message: string; // コメントの内容 (1文字以上100文字以下)
};

// カスタムフック
export const usePostComment = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	// コメントをPOSTする非同期関数
	const postComment = async (postCommentData: PostCommentData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_APP_BASE_URL}/comments`,
				postCommentData,
				{
					withCredentials: true,
				}
			);

			if (response.status === 200 || response.status === 201) {
				setSuccess(true); // 成功時
			}
		} catch (err: unknown) {
			if (axios.isAxiosError(err)) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to post comment');
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

	return { postComment, loading, error, success };
};

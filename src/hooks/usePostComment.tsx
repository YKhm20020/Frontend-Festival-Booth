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
			const response = await axios.post('/comments', postCommentData);

			if (response.status === 200 || response.status === 201) {
				setSuccess(true); // 成功時
			}
		} catch (err) {
			if (err.response) {
				// サーバーからのエラーレスポンス
				setError(err.response.data?.message || 'Failed to post comment.');
			} else if (err.request) {
				// サーバーからレスポンスがない場合
				setError('No response from server.');
			} else {
				// その他のエラー
				setError(err.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { postComment, loading, error, success };
};

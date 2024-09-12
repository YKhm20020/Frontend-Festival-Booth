import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProfileProps = {
	page?: string; // ページ数
	limit?: string; // 取得する自己紹介の数の上限
};

type ProfileData = {
	name: string; // ユーザー名
	introduction: string; // 自己紹介
	icon_num: number; // アイコンの番号
	github_url?: string; // GithubのURL (任意入力)
	x_url?: string; // XのURL (任意入力)
};

export const useGetProfile = ({ page, limit }: UseGetProfileProps) => {
	const [data, setData] = useState<ProfileData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await axios.get('http://localhost:8080/profiles', {
					params: {
						page: page || undefined,
						limit: limit || undefined,
					},
				});
				setData(response.data);
				console.log(response);
			} catch (err) {
				if (err.response) {
					// リクエストしたけど2xxの範囲外
					setError(err.response.data?.message || 'Failed to fetch profile');
				} else if (err.request) {
					// リクエストしたけど応答がない
					setError('No response from server.');
				} else {
					// その他のエラー
					setError('Error: ', err.message);
				}
				console.log(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [page, limit]);

	return { data, loading, error };
};

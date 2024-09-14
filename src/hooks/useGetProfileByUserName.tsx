import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProfileByUserNameProps = {
	name: string; // ユーザー名
};

type ProfileData = {
	name: string; // ユーザー名
	introduction: string; // 自己紹介
	icon_num: number; // アイコンの番号
	github_url?: string; // GithubのURL (任意入力)
	x_url?: string; // XのURL (任意入力)
};

export const useGetProfileByName = ({ name }: UseGetProfileByUserNameProps) => {
	const [data, setData] = useState<ProfileData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);
			setError(null);

			try {
				// リクエストしたけど2xxの範囲外
				const response = await axios.get(`/profiles/${name}`);
				console.log(response);
				setData(response.data);
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// リクエストしたけど2xxの範囲外
						setError(
							err.response.data?.message || `Failed to fetch profile of ${name}`,
						);
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

		if (name) {
			fetchProfile();
		}
	}, [name]);

	return { data, loading, error };
};

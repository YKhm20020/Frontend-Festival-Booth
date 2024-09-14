import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProfileByUserNameProps = {
	user_name: string; // ユーザー名
};

type ProfileData = {
	user_name: string; // ユーザー名
	introduction: string; // 自己紹介
	icon_num: number; // アイコンの番号
	github_url?: string; // GithubのURL (任意入力)
	x_url?: string; // XのURL (任意入力)
};

export const useGetProfileByName = ({ user_name }: UseGetProfileByUserNameProps) => {
	const [data, setData] = useState<ProfileData[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);

			try {
				// リクエストしたけど2xxの範囲外
				const response = await axios.get(
					`${import.meta.env.VITE_APP_BASE_URL}/profiles/${user_name}`,
					{
						withCredentials: true,
					}
				);
				setData(response.data);
			} catch (err: unknown) {
				if (axios.isAxiosError(err)) {
					if (err.response) {
						// リクエストしたけど2xxの範囲外
						setError(
							err.response.data?.message || `Failed to fetch profile of ${user_name}`,
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

		if (user_name) {
			fetchProfile();
		}
	}, [user_name]);

	return { data, loading, error };
};

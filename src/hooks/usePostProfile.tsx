import { useState } from 'react';
import axios from 'axios';

type ProfileData = {
	user_name: string; // ユーザー名
	introduction: string; // 自己紹介
	icon_num: number; // アイコンの番号
	github_url?: string; // GithubのURL (任意入力)
	x_url?: string; // XのURL (任意入力)
};

export const usePostProfile = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<boolean>(false);

	const postProfile = async (profileData: ProfileData) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		try {
			const response = await axios.post('/profiles', profileData);
			if (response.status === 200 || response.status === 201) {
				setSuccess(true);
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return { postProfile, loading, error, success };
};

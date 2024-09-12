import { useState } from 'react';
import axios from 'axios';

type ProfileData = {
	user_name: string;
	introduction: string;
	icon_num: number;
	github_url?: string;
	x_url?: string;
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

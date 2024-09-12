import { useState, useEffect } from 'react';
import axios from 'axios';

type UseGetProfileByNameProps = {
	name: string; // ユーザー名
};

export const useGetProfileByName = ({ name }: UseGetProfileByNameProps) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProfile = async () => {
			setLoading(true);
			try {
				const response = await axios.get(`/profiles/${name}`);
				setData(response.data);
			} catch (err) {
				setError(err.message);
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

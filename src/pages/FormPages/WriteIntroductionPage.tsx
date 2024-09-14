import type React from 'react';
import { useEffect } from 'react';
import { useLocation, useRouter, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Header } from '../../components/Header/Header';
import { useGetLoginStatus } from '../../hooks/useGetLoginStatus';
import { DispImage } from './_components/DispImage';

type IntroductionFormData = {
	introduction: string;
	githubUrl?: string;
	XUrl?: string;
	image: string;
};

export const WriteIntroductionPage: React.FC = () => {
	const { success, loading } = useGetLoginStatus();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const router = useRouter();
	const navigate = useNavigate();

	// successがfalseのときにauthページにリダイレクトする処理を追加
	useEffect(() => {
		if (!loading && !success) {
			navigate({ to: '/auth' });
		}
	}, [loading, success, navigate]);

	const defaultValues: IntroductionFormData = {
		introduction: searchParams.get('introduction') || '',
		githubUrl: searchParams.get('githubUrl') || '',
		XUrl: searchParams.get('XUrl') || '',
		image: searchParams.get('image') || '',
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IntroductionFormData>({
		mode: 'onChange',
		defaultValues,
	});

	const onSubmit: SubmitHandler<IntroductionFormData> = (data) => {
		router.navigate({
			to: '/confirm-introduction',
			search: data,
		});
	};

	return (
		<>
			<Header />
			<div className='flex justify-center bg-gray-100'>

				{/* ローディング中の処理 */}
				{loading && <p>Loading...</p>}
				{success && (
					<div className='w-full max-w-xl'>
						<h1 className='text-lg font-bold text-gray-800 my-4 text-center'>
							Write Introduction Page
						</h1>
						<form
							className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-gray-700'
							onSubmit={handleSubmit(onSubmit)}
						>
						
							{/* 自己紹介コメント入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='introduction'>
									自己紹介コメント
								</label>
								<textarea
									className={`shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.introduction ? 'border-red-500' : 'border-grey-100'}`}
									id='introduction'
									{...register('introduction', {
										required: '自己紹介コメントは必須です',
										maxLength: {
											value: 200,
											message: '最大200文字です',
										},
									})}
									placeholder='自己紹介スペース'
								/>
								{errors.introduction && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.introduction.message}
									</p>
								)}
							</div>

							{/* GithubURL入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='githubUrl'>
									GitHub URL
								</label>
								<input
									className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.githubUrl ? 'border-red-500' : 'border-grey-100'}`}
									id='githubUrl'
									{...register('githubUrl', {
										pattern: {
											value: /^(https?:\/\/)?(www\.)?github\.com(\/[^\s]*)?$/i,
											message:
												'GitHubのURLを入力してください (例: https://github.com/username)',
										},
									})}
									placeholder='https://github.com/username'
								/>
								{errors.githubUrl && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.githubUrl.message}
									</p>
								)}
							</div>

							{/* X URL入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='XUrl'>
									X URL
								</label>
								<input
									className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.XUrl ? 'border-red-500' : 'border-grey-100'}`}
									id='XUrl'
									{...register('XUrl', {
										pattern: {
											value: /^(https?:\/\/)?(www\.)?x\.com(\/[^\s]*)?$/i,
											message:
												'XのURLを入力してください (例: https://x.com/username)',
										},
									})}
									placeholder='https://x.com/username'
								/>
								{errors.XUrl && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.XUrl.message}
									</p>
								)}
							</div>

							{/* イメージ画像選択フィールド */}
							<div className='mt-8'>
								<label
									className={`block text-sm font-bold mb-2 ${errors.image ? 'text-red-500' : 'text-grey-700'}`}
									htmlFor='image'
								>
									画像を選択してください
								</label>
								<label>
									<input
										type='radio'
										value='0'
										{...register('image', { required: '画像を選択してください' })}
									/>
									画像1
									<DispImage src='/images/robot_and_hogeta.jpeg' alt='sample-alt' />
								</label>
								<br />

								<label>
									<input type='radio' value='1' {...register('image')} />
									画像2
									<DispImage src='/images/horse.jpg' alt='sample-alt' />
								</label>
								<br />

								<label>
									<input type='radio' value='2' {...register('image')} />
									画像3
									<DispImage src='/images/turtle.jpg' alt='sample-alt' />
								</label>
								<br />

								<label>
									<input type='radio' value='3' {...register('image')} />
									画像4
									<DispImage src='/images/scale.jpg' alt='sample-alt' />
								</label>
								<br />
							</div>

							{/* 送信ボタン */}
							<div className='flex justify-center'>
								<button
									className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-8'
									type='submit'
								>
									登録する！！
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</>
	);
};

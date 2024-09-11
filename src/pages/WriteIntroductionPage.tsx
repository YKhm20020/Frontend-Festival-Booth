import type React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
	name: string;
	introduction: string;
	githubUrl: string;
	XUrl: string;
};

export const WriteIntroductionPage: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log('Submitted Data:', data);
		alert(`Name: ${data.name}\nintroduction: ${data.introduction}\nGitHub URL: ${data.githubUrl}\nX URL: ${data.XUrl}`);
	};

	return (
		<div className='flex justify-center bg-gray-100'>
			<div className='w-full max-w-xl'>
				<h1>Write Introduction Page</h1>
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
					{/* ユーザ名入力フィールド */}
					<div>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>ユーザ名</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-grey-100'}`}
							id='name'
							{...register('name',{
								required: 'ユーザ名は必須です'
							})}
							placeholder='ユーザ名を入力してください'
						/>
						{errors.name && <p className='text-red-500 text-xs italic'>{errors.name.message}</p>}
					</div>

					{/* 自己紹介コメント入力フィールド */}
					<div>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='introduction'>自己紹介コメント</label>
						<textarea
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='introduction'
							{...register('introduction')}
							placeholder='自己紹介スペース'
						/>
					</div>
					
					{/* GithubURL入力フィールド */}
					<div>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='githubUrl'>GitHub URL</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.githubUrl ? 'border-red-500' : 'border-grey-100'}`}
							id='githubUrl'
							{...register('githubUrl',{
								pattern: {
									value: /^(https?:\/\/)?(www\.)?github\.com(\/[^\s]*)?$/i,
									message: '有効なGitHubのURLを入力してください (例: https://github.com/username)'
								}
							})}
							placeholder='https://github.com/username'
						/>
						{errors.githubUrl && <p className='text-red-500 text-xs italic'>{errors.githubUrl.message}</p>}
					</div>

					{/* XURL入力フィールド */}
					<div>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='XUrl'>X URL</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.XUrl ? 'border-red-500' : 'border-grey-100'}`}
							id='XUrl'
							{...register('XUrl',{
								pattern: {
									value: /^(https?:\/\/)?([a-z0-9]+[.])*[a-z0-9]+\.[a-z]+(\/[^\s]*)?$/i,
									message: '有効なURLを入力してください'
								}
							})}
							placeholder='XのURLを記載してください'
						/>
						{errors.XUrl && <p className='text-red-500 text-xs italic'>{errors.XUrl.message}</p>}
					</div>

					{/* 送信ボタン */}
					<button type='submit'>投稿する！！</button>
				</form>
			</div>
		</div>
	);
};
import type React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
	name: string;
	introduction: string;
	githubUrl?: string;
	XUrl?: string;
};

export const WriteIntroductionPage: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log('Submitted Data:', data);
		alert('自己紹介おめでとう！');
	};

	return (
		<div className='flex justify-center bg-gray-100'>
			<div className='w-full max-w-xl'>
				<h1 className='text-lg font-bold text-gray-800 my-4 text-center'>Write Introduction Page</h1>
				<form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-gray-700' onSubmit={handleSubmit(onSubmit)}>
					{/* ユーザ名入力フィールド */}
					<div className='mt-4'>
						<label className='block text-sm font-bold mb-2' htmlFor='name'>ユーザ名</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-grey-100'}`}
							id='name'
							{...register('name',{
								required: 'ユーザ名は必須です',
								maxLength: {
									value: 20,
									message: '最大20文字です'
								}
							})}
							placeholder='君の名前は？'
						/>
						{errors.name && <p className='absolute text-red-500 text-xs italic'>{errors.name.message}</p>}
					</div>

					{/* 自己紹介コメント入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='introduction'>自己紹介コメント</label>
						<textarea
							className={`shadow appearance-none border rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-grey-100'}`}
							id='introduction'
							{...register('introduction',{
								required: '自己紹介コメントは必須です',
								maxLength: {
									value: 200,
									message: '最大200文字です'
								}
							})}
							placeholder='自己紹介スペース'
						/>
						{errors.introduction && <p className='absolute text-red-500 text-xs italic'>{errors.introduction.message}</p>}
					</div>
					
					{/* GithubURL入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='githubUrl'>GitHub URL</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.githubUrl ? 'border-red-500' : 'border-grey-100'}`}
							id='githubUrl'
							{...register('githubUrl',{
								pattern: {
									value: /^(https?:\/\/)?(www\.)?github\.com(\/[^\s]*)?$/i,
									message: 'GitHubのURLを入力してください (例: https://github.com/username)'
								}
							})}
							placeholder='https://github.com/username'
						/>
						{errors.githubUrl && <p className='absolute text-red-500 text-xs italic'>{errors.githubUrl.message}</p>}
					</div>

					{/* X URL入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='XUrl'>X URL</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.XUrl ? 'border-red-500' : 'border-grey-100'}`}
							id='XUrl'
							{...register('XUrl',{
								pattern: {
									value: /^(https?:\/\/)?(www\.)?x\.com(\/[^\s]*)?$/i,
									message: 'XのURLを入力してください (例: https://x.com/username)'
								}
							})}
							placeholder='https://x.com/username'
						/>
						{errors.XUrl && <p className='absolute text-red-500 text-xs italic'>{errors.XUrl.message}</p>}
					</div>

					{/* 送信ボタン */}
					<div className='flex justify-center'>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-12' 
								type='submit'>
							登録する！！
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
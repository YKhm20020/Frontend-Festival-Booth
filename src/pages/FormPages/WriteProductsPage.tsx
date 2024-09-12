import type React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type FormData = {
	name: string;
	title: string;
	url: string;
	comment?: string;
};

export const WriteProductsPage: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
	const initText: string = '投稿する？' ;
	const [text, setText] = useState(initText);

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log('Submitted Data:', data);
		alert('投稿できました！！！');
	};

	return (
		<div className='flex justify-center bg-gray-100'>
			<div className='w-full max-w-xl'>
				<h1 className='text-lg font-bold text-gray-800 my-4 text-center'>Write Products Page</h1>
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
							placeholder='ユーザ名を入力してけろ'
						/>
						{errors.name && <p className='absolute text-red-500 text-xs italic'>{errors.name.message}</p>}
					</div>

					{/* タイトル入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='title'>タイトル</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : 'border-grey-100'}`}
							id='title'
							{...register('title',{
								required: 'タイトルは必須です',
								maxLength: {
									value: 50,
									message: '最大50文字です'
								}
							})}
							placeholder='タイトルを入力してください'
						/>
						{errors.title && <p className='absolute text-red-500 text-xs italic'>{errors.title.message}</p>}
					</div>

					{/* URL入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='url'>URL</label>
						<input
							className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.url ? 'border-red-500' : 'border-grey-100'}`}
							id='url'
							{...register('url',{
								required: 'URLは必須です',
								pattern: {
									value: /^(https?:\/\/)?([a-z0-9]+[.])*[a-z0-9]+\.[a-z]+(\/[^\s]*)?$/i,
									message: '有効なURLを入力してください'
								}
							})}
							placeholder='https://example.com'
						/>
						{errors.url && <p className='absolute text-red-500 text-xs italic'>{errors.url.message}</p>}
					</div>

					{/* コメント入力フィールド */}
					<div className='mt-8'>
						<label className='block text-sm font-bold mb-2' htmlFor='comment'>コメント</label>
						<textarea
							className='border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline'
							id='comment'
							{...register('comment',{
								maxLength: {
									value: 200,
									message: '最大200文字です'
								}
							})}
							placeholder='成果物についての説明やコメントを入力してください'
						/>
						{errors.comment && <p className='absolute text-red-500 text-xs italic'>{errors.comment.message}</p>}
					</div>

					{/* 送信ボタン */}
					<div className='flex justify-center'>
						<button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-12'
								onMouseEnter={() => setText('投稿する！！')}
								onMouseLeave={() => setText('投稿する？')} 
								type='submit'>
							{text}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
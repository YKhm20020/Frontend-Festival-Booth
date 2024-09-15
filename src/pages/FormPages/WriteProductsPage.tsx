import type React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useRouter, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Header } from '../../components/Header/Header';
import { useGetLoginStatus } from '../../hooks/useGetLoginStatus';

type ProductsFormData = {
	title: string;
	url: string;
	comment?: string;
};

export const WriteProductsPage: React.FC = () => {
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


	const defaultValues: ProductsFormData = {
		title: searchParams.get('title') || '',
		url: searchParams.get('url') || '',
		comment: searchParams.get('comment') || '',
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ProductsFormData>({
		mode: 'onChange',
		defaultValues,
	});
	const initText: string = '投稿する？';
	const [text, setText] = useState(initText);

	const onSubmit: SubmitHandler<ProductsFormData> = (data) => {
		router.navigate({
			to: '/confirm-products',
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
							Write Products Page
						</h1>
						<form
							className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-gray-700'
							onSubmit={handleSubmit(onSubmit)}
						>

							{/* タイトル入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='title'>
									タイトル
								</label>
								<input
									className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : 'border-grey-100'}`}
									id='title'
									{...register('title', {
										required: 'タイトルは必須です',
										maxLength: {
											value: 50,
											message: '最大50文字です',
										},
									})}
									placeholder='タイトルを入力してください'
								/>
								{errors.title && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.title.message}
									</p>
								)}
							</div>

							{/* URL入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='url'>
									URL
								</label>
								<input
									className={`border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline ${errors.url ? 'border-red-500' : 'border-grey-100'}`}
									id='url'
									{...register('url', {
										required: 'URLは必須です',
										pattern: {
											value: /^(https?:\/\/)?([a-zA-Z0-9-_.]+)\.[a-zA-Z]{2,}(\/[^\s]*)?$/i,
											message: '有効なURLを入力してください',
										},
									})}
									placeholder='https://example.com'
								/>
								{errors.url && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.url.message}
									</p>
								)}
							</div>

							{/* コメント入力フィールド */}
							<div className='mt-8'>
								<label className='block text-sm font-bold mb-2' htmlFor='comment'>
									コメント
								</label>
								<textarea
									className='border shadow appearance-none rounded w-full py-2 px-3 mb-2 leading-tight focus:outline-none focus:shadow-outline'
									id='comment'
									{...register('comment', {
										maxLength: {
											value: 200,
											message: '最大200文字です',
										},
									})}
									placeholder='成果物についての説明やコメントを入力してください'
								/>
								{errors.comment && (
									<p className='absolute text-red-500 text-xs italic'>
										{errors.comment.message}
									</p>
								)}
							</div>

							{/* 送信ボタン */}
							<div className='flex justify-center'>
								<button
									className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-12'
									onMouseEnter={() => setText('投稿する！！')}
									onMouseLeave={() => setText('投稿する？')}
									type='submit'
								>
									{text}
								</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</>
	);
};

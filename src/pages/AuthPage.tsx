import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
	email: string;
	password: string;
};

export const AuthPage: React.FC = () => {
	const [isLogin, setIsLogin] = useState(true);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FormData) => {
		console.log(isLogin ? 'Login attempt:' : 'Signup attempt:', data);
		// 認証ロジックを追加
	};

	// パスワードの最小文字数
	const minPassLength: number = 8;

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-r p-4'>
			<div className='bg-white rounded-lg shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden'>
				<div
					className={`w-full md:w-1/2 p-8 transition-all duration-300 ease-in-out ${
						isLogin ? 'order-1' : 'order-2 md:order-1'
					}`}
				>
					<h2 className='text-3xl font-bold mb-6 text-gray-800'>
						{isLogin ? 'ログイン' : '新規登録'}
					</h2>
					<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700'
							>
								メールアドレス
							</label>
							<input
								id='email'
								type='email'
								{...register('email', { required: 'メールアドレスは必須です' })}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out'
							/>
							{errors.email && (
								<p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>
							)}
						</div>
						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700'
							>
								パスワード
							</label>
							<input
								id='password'
								type='password'
								{...register('password', {
									required: 'パスワードは必須です',
									minLength: {
										value: minPassLength,
										message: 'パスワードは8文字以上である必要があります',
									},
								})}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out'
							/>
							{errors.password && (
								<p className='mt-1 text-sm text-red-600'>
									{errors.password.message}
								</p>
							)}
						</div>
						<button
							type='submit'
							className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out'
						>
							{isLogin ? 'ログイン' : '登録'}
						</button>
					</form>
				</div>
				<div
					className={`w-full md:w-1/2 p-8 flex flex-col justify-center items-center bg-gray-100 transition-all duration-300 ease-in-out ${
						isLogin ? 'order-1 md:order-2' : 'order-2 md:order-2'
					}`}
				>
					<h3 className='text-2xl font-bold mb-4 text-gray-800'>
						{isLogin ? '新規登録はこちら' : 'アカウントをお持ちの方'}
					</h3>
					<p className='text-gray-600 mb-6 text-center'>
						{isLogin
							? 'アカウントをお持ちでない方は、新規登録から祭りに参加しましょう。'
							: 'すでにアカウントをお持ちの方は、ログインして入場してください。'}
					</p>
					<button
						type='submit'
						onClick={() => setIsLogin(!isLogin)}
						className='py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                        transition duration-150 ease-in-out'
					>
						{isLogin ? '新規登録' : 'ログイン'}
					</button>
				</div>
			</div>
		</div>
	);
};

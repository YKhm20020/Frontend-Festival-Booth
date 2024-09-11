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
		console.log("Submitted Data:", data);
		alert(`Name: ${data.name}\nintroduction: ${data.introduction}\ngithub-URL: ${data.githubUrl}\nX-URL: ${data.XUrl}`);
	};

	return (
		<div>
			<h1>Write Introduction Page</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* ユーザ名入力フィールド */}
				<div>
					<label htmlFor='name'>ユーザ名</label>
					<input
						id='name'
						{...register('name',{
							required: 'ユーザ名は必須です'
						})}
						placeholder='ユーザ名を入力してください'
					/>
					{errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
				</div>

				{/* 自己紹介コメント入力フィールド */}
				<div>
					<label htmlFor='introduction'>自己紹介コメント</label>
					<textarea
						id='introduction'
						{...register('introduction')}
						placeholder='自己紹介スペース'
					/>
				</div>
				
				{/* GithubURL入力フィールド */}
				<div>
					<label htmlFor='githubUrl'>Github-URL</label>
					<input
						id='githubUrl'
						{...register('githubUrl',{
							pattern: {
								value: /^(https?:\/\/github.com)?+(\/[^\s]*)?$/i,
								message: 'GithubのURLを入力してください'
							}
						})}
						placeholder='https://github.com/username'
					/>
					{errors.githubUrl && <p style={{ color: 'red' }}>{errors.githubUrl.message}</p>}
				</div>

				{/* XURL入力フィールド */}
				<div>
					<label htmlFor='XUrl'>X-URL</label>
					<input
						id='XUrl'
						{...register('XUrl',{
							pattern: {
								value: /^(https?:\/\/)?([a-z0-9]+[.])*[a-z0-9]+\.[a-z]+(\/[^\s]*)?$/i,
								message: '有効なURLを入力してください'
							}
						})}
						placeholder='XのURLを記載してください'
					/>
					{errors.XUrl && <p style={{ color: 'red' }}>{errors.XUrl.message}</p>}
				</div>

				{/* 送信ボタン */}
				<button type='submit'>投稿する！！</button>
			</form>
		</div>
	);
};
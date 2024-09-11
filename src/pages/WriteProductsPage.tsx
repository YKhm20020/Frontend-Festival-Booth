import type React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
	title: string;
	url: string;
	comment: string;
};

export const WriteProductsPage: React.FC = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log("Submitted Data:", data);
		alert(`Title: ${data.title}\nURL: ${data.url}\nComment: ${data.comment}`);
	};

	return (
		<div>
			<h1>Write Products Page</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* タイトル入力フィールド */}
				<div>
				<label htmlFor='title'>タイトル</label>
					<input
						id='title'
						{...register('title',{
							required: 'タイトルは必須です'
						})}
						placeholder='タイトルを入力してください'
					/>
					{errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
				</div>
				
				{/* URL入力フィールド */}
				<div>
					<label htmlFor='url'>URL</label>
					<input
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
					{errors.url && <p style={{ color: 'red' }}>{errors.url.message}</p>}
				</div>

				{/* コメント入力フィールド */}
				<div>
					<label htmlFor='comment'>コメント</label>
					<textarea
						id='comment'
						{...register('comment')}
						placeholder='成果物についての説明やコメントを入力してください'
					/>
				</div>

				{/* 送信ボタン */}
				<button type='submit'>投稿する！！</button>
			</form>
		</div>
	);
};
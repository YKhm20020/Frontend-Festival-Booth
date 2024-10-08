import type React from 'react';
import { useEffect } from 'react';
import { useLocation, useRouter, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useGetLoginStatus } from '../../hooks/useGetLoginStatus';
import { usePostAnswers } from '../../hooks/usePostAnswers';
import { Header } from '../../components/Header/Header';

const Questions = [
	'開発は好き？',
	'どっちの開発が好き？',
	'Gopherくんは国民的キャラクターだと思う？',
] as const;

const Options = [
	['大好き！', 'それなりに好き'],
	['フロントエンド', 'バックエンド'],
	['もちろん！', '誰？ それ'],
] as const;

type QuestionsFormData = {
	question0: number;
	question1: number;
	question2: number;
};

export const WritenMatchingPage: React.FC = () => {
	const { success, loading } = useGetLoginStatus();
	const { postAnswers, error } = usePostAnswers();

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

	const defaultValues: QuestionsFormData = {
		question0: Number(searchParams.get('question0')) || 0,
		question1: Number(searchParams.get('question1')) || 0,
		question2: Number(searchParams.get('question2')) || 0,
	};

	const { register, handleSubmit } = useForm({
		mode: 'onChange',
		defaultValues,
	});

	const onSubmit: SubmitHandler<QuestionsFormData> = async (data) => {
		// question0, question1, question2 の値を基に一意の3進数の値を生成
		const answer: number = data.question0 * 100 + data.question1 * 10 + data.question2 * 1;
		await postAnswers({ answer });
		if (error) {
			alert('送信に失敗しました');
			router.navigate({
				to: '/write-products',
				search: location.search,
			});
		} else {
			alert('投稿できました! あなたと同じ趣味の人とつながろう！');
			router.navigate({
				to: '/introduction-list',
				search: (current) => ({
					...current, // 既存のパラメータを保持
					answer: answer.toString(), // answerを文字列に変換して渡す
				}),
			});
		}
	};

	return (
		<>
			<Header />
			<div className='mt-8'>
				{/* ローディング中の処理 */}
				{loading && <p>Loading...</p>}
				{success && (
					<>
						<h1 className='text-2xl font-bold text-center text-red-700'>
							誰とつながるかな？ マッチング診断
						</h1>
						<div className='px-4 max-w-md mx-auto bg-red-100 shadow-lg space-y-4'>
							<form onSubmit={handleSubmit(onSubmit)}>
								{Questions.map((question, qIndex) => (
									<div key={qIndex} className='border-t border-red-300 pt-4 px-4'>
										<h2 className='text-xl font-semibold text-red-600'>
											{question}
										</h2>
										<div className='mt-2'>
											{Options[qIndex].map((option, oIndex) => (
												<label key={oIndex} className='block text-lg'>
													{oIndex === 0 ? (
														<input
															type='radio'
															value={oIndex}
															{...register(
																`question${qIndex}` as `question${0 | 1 | 2}`,
															)}
															className='mr-2'
														/>
													) : (
														<input
															type='radio'
															value={oIndex}
															required
															{...register(
																`question${qIndex}` as `question${0 | 1 | 2}`,
															)}
															className='mr-2'
														/>
													)}
													{option}
												</label>
											))}
										</div>
									</div>
								))}
								<button
									type='submit'
									className='w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600'
								>
									登録する！！
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</>
	);
};

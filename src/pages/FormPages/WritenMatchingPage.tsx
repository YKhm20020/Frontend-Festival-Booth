import type React from 'react';
import { useLocation, useRouter } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Header } from '../../components/Header/Header';

const Questions = [
	'好きな祭りのタイプはどれですか？',
	'祭りで楽しみたいアクティビティは？',
	'祭りの雰囲気で一番大事だと思うのは？',
] as const;

const Options = [
	['花火大会', '屋台'],
	['屋台めぐり', '踊り'],
	['賑やかさ', '伝統'],
] as const;

type QuestionsFormData = {
	question0: number;
	question1: number;
	question2: number;
};

export const WritenMatchingPage: React.FC = () => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const router = useRouter();

	const defaultValues: QuestionsFormData = {
		question0: Number(searchParams.get('question0')) || 0,
		question1: Number(searchParams.get('question1')) || 0,
		question2: Number(searchParams.get('question2')) || 0,
	};

	const { register, handleSubmit } = useForm({
		mode: 'onChange',
		defaultValues,
	});

	const onSubmit: SubmitHandler<QuestionsFormData> = (data) => {
		console.log(data);
		// question0, question1, question2 の値を基に一意の3進数の値を生成
		const answer = data.question0 * 100 + data.question1 * 10 + data.question2 * 1;
		console.log(answer);
		router.navigate({
			to: '/introduction-list',
			search: { answer: answer.toString() },
		});
	};

	// const [answers, setAnswers] = useState<string[]>(Array(Questions.length).fill(''));

	// const handleChange = (questionIndex: number, option: string) => {
	// 	const newAnswers = [...answers];
	// 	newAnswers[questionIndex] = option;
	// 	setAnswers(newAnswers);
	// };

	return (
		<>
			<Header />
			<h1 className='text-2xl font-bold text-center text-red-700'>祭りアンケート</h1>
			<div className='mt-p-6 max-w-md mx-auto bg-red-100 rounded-xl shadow-lg space-y-4'>
				<form onSubmit={handleSubmit(onSubmit)}>
					{Questions.map((question, qIndex) => (
						<div key={qIndex} className='border-t border-red-300 pt-4'>
							<h2 className='text-xl font-semibold text-red-600'>{question}</h2>
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
	);
};

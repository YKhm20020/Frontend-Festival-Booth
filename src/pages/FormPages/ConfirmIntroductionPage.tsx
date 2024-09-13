import type React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useLocation, useRouter } from '@tanstack/react-router';
import { usePostProfile } from '../../hooks/usePostProfile';

type IntroductionFormData = {
	name: string;
	introduction: string;
	githubUrl?: string;
	XUrl?: string;
	image: string;
};

export const ConfirmIntroductionPage: React.FC = () => {
    const router = useRouter();
    const location = useLocation();
    const { name, introduction, githubUrl, XUrl, image } = location.state;

    const confirmData: IntroductionFormData = {
        name: name,
        introduction: introduction,
        githubUrl: githubUrl,
        XUrl: XUrl,
        image: image,
    };

    const { postProfile, loading, error, success } = usePostProfile();

    const onSubmit: SubmitHandler<IntroductionFormData> = async (data) => {
		console.log('Submitted Data:', data);
        const postProfileData = {
            user_name: data.name,
            introduction: data.introduction,
            icon_num: Number(data.image),
            github_url: data.githubUrl,
            x_url: data.XUrl,
        };

        await postProfile(postProfileData);
        if (success){
            alert('自己紹介おめでとう！');
            router.navigate({
                to: '/',
            });
		};
        if (error){
            alert('送信に失敗しました');
            console.log(error);
            router.navigate({
                to: '/write-introduction',
                state: location.state,
            });
        }
	};

    const dicImage: { [imageNum: string]: string } = {
        '0': '/images/robot_and_hogeta.jpeg',
    };

    return (
        <div className='flex justify-center bg-gray-100'>
			<div className='w-full max-w-xl'>
                <h1 className='text-lg font-bold text-gray-800 my-4 text-center'>入力データの確認</h1>
                <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-gray-700'>
                    <p><strong>名前:</strong>{confirmData.name}</p>
                    <p className='mt-4'><strong>自己紹介コメント</strong>
                        <div className='border-black appearance-none rounded w-full py-2 px-3 mb-2 leading-tight'>
                            {confirmData.introduction}
                        </div>
                    </p>
                    <p className='mt-4'><strong>GitHub URL:</strong> {confirmData.githubUrl}</p>
                    <p className='mt-4'><strong>X URL:</strong> {confirmData.XUrl}</p>
                    <p className='mt-4'><strong>image</strong></p>
                    <img 
                        src={dicImage[confirmData.image]}
                        className='object-cover object-center mt-1 h-60 md:w-72 lg:w-80 focus:shadow-outline'
                        alt='sample-alt'
                        width={300}
                        height={300} 
                    />
                    <div className='flex justify-center space-x-12'>
                        {/* 送信ボタン */}
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-8' 
                                type='submit'
                                onClick={() => onSubmit(confirmData)}>
                            登録する！！
                        </button>

                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-8'
                                onClick={() => router.navigate({to: '/write-introduction',
                                                                state: location.state,
                        })}>
                            戻る
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
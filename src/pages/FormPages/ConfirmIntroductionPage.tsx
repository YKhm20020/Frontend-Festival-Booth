import type React from 'react';
import { useLocation } from '@tanstack/react-router';
import { useRouter } from '@tanstack/react-router';

export const ConfirmIntroductionPage: React.FC = () => {
    const router = useRouter();
    const location = useLocation();
    const { name, introduction, githubUrl, XUrl, image } = location.state || { name: '', introduction: '', githubUrl: '', Xurl: '', image: '' };

    return (
        <div>
        <h2>送信されたデータの確認</h2>
        <p><strong>名前:</strong> {name}</p>
        <p><strong>自己紹介コメント:</strong> {introduction}</p>
        <p><strong>GitHub URL:</strong> {githubUrl}</p>
        <p><strong>X URL:</strong> {XUrl}</p>
        <p><strong>image:</strong> {image}</p>
        <img 
                src='/images/robot_and_hogeta.jpeg'
                className='object-cover object-center mt-1 h-60 md:w-72 lg:w-80 focus:shadow-outline'
                alt='sample-alt'
                width={300}
                height={300} 
            />
            <button onClick={() => router.navigate({to: '/write-introduction',
                                                    state: location.state,
            })}>
                戻る
            </button>
        </div>
    );
};
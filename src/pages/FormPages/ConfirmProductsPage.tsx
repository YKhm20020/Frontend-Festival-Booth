import type React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useLocation, useRouter } from '@tanstack/react-router';

type ProductsFormData = {
	name: string;
	title: string;
	url: string;
	comment?: string;
};

export const ConfirmProductsPage: React.FC = () => {
    const router = useRouter();
    const location = useLocation();
    const { name, title, url, comment } = location.state;

    const confirmData: ProductsFormData = {
        name: name,
        title: title,
        url: url,
        comment: comment,
    };

    const onSubmit: SubmitHandler<ProductsFormData> = (data) => {
		console.log('Submitted Data:', data);
        alert('投稿できました!!!');
		router.navigate({
			to: '/',
		});
	};

    return (
        <div className='flex justify-center bg-gray-100'>
			<div className='w-full max-w-xl'>
                <h1 className='text-lg font-bold text-gray-800 my-4 text-center'>入力データの確認</h1>
                <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8 text-gray-700'>
                    <p><strong>名前:</strong>{confirmData.name}</p>
                    <p className='mt-4'><strong>タイトル:</strong> {confirmData.title}</p>
                    <p className='mt-4'><strong>URL:</strong> {confirmData.url}</p>
                    <p className='mt-4'><strong>コメント</strong>
                        <div className='border-black appearance-none rounded w-full py-2 px-3 mb-2 leading-tight'>
                            {confirmData.comment}
                        </div>
                    </p>
                    <div className='flex justify-center space-x-12'>
                        {/* 送信ボタン */}
                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-8' 
                                type='submit'
                                onClick={() => onSubmit(confirmData)}>
                            投稿する！！
                        </button>

                        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:ring-2 hover:ring-offset-2 hover:ring-blue-600 mt-8'
                                onClick={() => router.navigate({to: '/write-products',
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
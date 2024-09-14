import type React from 'react';
import { useState } from 'react';
import { Modal } from './Modal'; // Modalコンポーネントをインポート

export const ParentComponent: React.FC = () => {
	const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false);
	const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false);

	const openFirstModal = () => {
		setIsFirstModalOpen(true);
	};

	const closeAllModals = () => {
		setIsFirstModalOpen(false);
		setIsSecondModalOpen(false);
	};

	const openSecondModal = () => {
		setIsSecondModalOpen(true);
	};

	return (
		<div>
			{/* 最初のモーダルを開くボタン */}
			<button onClick={openFirstModal}>Open First Modal</button>

			{/* First Modal */}
			<Modal
				isOpen={isFirstModalOpen}
				userName='UserName'
				src='imageSrc.jpg'
				alt='Description'
				modalTitle='First Modal Title'
				modalText='This is the first modal'
				modalLink='http://example.com'
				closeAllModals={closeAllModals}
				openOtherModal={() => {
					setIsFirstModalOpen(false);
					openSecondModal();
				}}
			/>

			{/* Second Modal */}
			<Modal
				isOpen={isSecondModalOpen}
				userName='UserName'
				src='imageSrc.jpg'
				alt='Description'
				modalTitle='Second Modal Title'
				modalText='This is the second modal'
				modalLink='http://example.com'
				closeAllModals={closeAllModals}
				openOtherModal={() => {
					setIsSecondModalOpen(false);
					openFirstModal();
				}}
			/>
		</div>
	);
};

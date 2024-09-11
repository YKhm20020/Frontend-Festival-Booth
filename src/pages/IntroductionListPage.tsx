import type React from 'react';
import { Card } from '../components/Cards/Card';

export const IntroductionListPage: React.FC = () => {
	return (
		<div>
			<Card
				src='/images/robot_and_hogeta.jpeg'
				alt='sample-alt'
				title='Sample title'
				links={['link1', 'link2', 'link3']}
				modalTitle='Sample Title'
				modalText='Sample Text'
			/>
		</div>
	);
};

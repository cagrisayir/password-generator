import { Slider } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

// create props interface that takes function as prop return void
interface Props {
	length: number;
	handleLength: Dispatch<SetStateAction<number>>;
}

function LengthSlider({ length, handleLength }: Props) {
	return (
		<div className='flex flex-col  pt-3 pb-3 gap-5 font-serif'>
			<div className='flex flex-row items-center justify-between'>
				<p className='text-xl'>Character Length:</p>
				<p className='text-3xl text-[#A4FFAF]'>{length}</p>
			</div>
			<Slider
				value={length}
				min={4}
				max={16}
				onChange={handleLength}
				color={'#A4FFAF'}
			/>
		</div>
	);
}

export default LengthSlider;

import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import { AiOutlineSwapRight } from 'react-icons/ai';

import LengthSlider from './LengthSlider';
import generate from '../utils/generate';

interface Props {
	handlePassword: (password: string) => void;
}
const PasswordGenerator = ({ handlePassword }: Props) => {
	const [length, setLength] = useState(8);
	const [isLower, setIsLower] = useState(true);
	const [isUpper, setIsUpper] = useState(true);
	const [isNumber, setIsNumber] = useState(true);
	const [isSymbol, setIsSymbol] = useState(true);

	function handleClick() {
		const newPassword = generate(length, isLower, isUpper, isNumber, isSymbol);
		handlePassword(newPassword);
	}
	return (
		<div className='bg-[#24232C] rounded-sm  md:p-6  p-2 pt-4 pb-4 w-full md:max-w-md flex flex-col gap-10'>
			<LengthSlider length={length} handleLength={setLength} />
			<div className='flex flex-col gap-4 text-center text-2xl'>
				<Checkbox
					value='lower'
					label='Lower Case'
					defaultChecked
					disabled
					onChange={() => setIsLower(!isLower)}
					size='xl'
					color='#A4FFAF'
				/>
				<Checkbox
					value='upper'
					label='Upper Case'
					defaultChecked
					onChange={() => setIsUpper(!isUpper)}
					size='xl'
					color='#A4FFAF'
				/>
				<Checkbox
					value='number'
					label='Number'
					defaultChecked
					onChange={() => setIsNumber(!isNumber)}
					size='xl'
					color='#A4FFAF'
				/>
				<Checkbox
					value='symbol'
					label='Symbol'
					defaultChecked
					onChange={() => setIsSymbol(!isSymbol)}
					size='xl'
					color='#A4FFAF'
				/>
			</div>
			<button
				onClick={handleClick}
				className='text-center font-serif font-semibold justify-center items-center text-3xl flex gap-2 text-black bg-[#A4FFAF] rounded-sm pt-4 pb-4 pr-3 pl-3'
			>
				Generate
				<AiOutlineSwapRight />
			</button>
		</div>
	);
};

export default PasswordGenerator;

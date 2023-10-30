import React from 'react';
import { IoMdCopy } from 'react-icons/io';

interface Props {
	password: string;
}

const PasswordContainer = ({ password }: Props) => {
	return (
		<div className='bg-[#24232C] p-2 pt-4 pb-4 flex flex-row justify-between items-center w-full md:max-w-md md:p-6'>
			<p className='text-white text-center font-semibold font-sans text-3xl'>
				{password}
			</p>
			<IoMdCopy className='text-[#A4FFAF] text-3xl' />
		</div>
	);
};

export default PasswordContainer;

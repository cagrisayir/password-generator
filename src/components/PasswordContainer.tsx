import { IoMdCopy } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
	password: string;
}

const PasswordContainer = ({ password }: Props) => {
	return (
		<div className='bg-[#24232C] flex flex-row justify-between items-center w-full md:max-w-md md:p-6  p-2 pt-4 pb-4'>
			<p className='text-white text-center font-semibold font-sans text-3xl'>
				{password}
			</p>
			<CopyToClipboard text={password}>
				<IoMdCopy className='text-[#A4FFAF] text-3xl hover:bg-[#A4FFAF] hover:rounded-xl hover:text-[#24232C]' />
			</CopyToClipboard>
		</div>
	);
};

export default PasswordContainer;

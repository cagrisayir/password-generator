import { useState } from 'react';

import LengthSlider from './LengthSlider';
import generate from '../utils/generate';

interface Props {
	handlePassword: (password: string) => void;
}
const PasswordGenerator = ({ handlePassword }: Props) => {
	const [value, setValue] = useState(8);

	function handleClick() {
		const newPassword = generate(value, true, true, true, true);
		console.log(newPassword);
		handlePassword(newPassword);
	}
	return (
		<div className='w-full md:max-w-md'>
			<LengthSlider length={value} handleLength={setValue} />
			<button onClick={handleClick}>click</button>
		</div>
	);
};

export default PasswordGenerator;

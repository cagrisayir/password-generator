import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import PasswordContainer from './components/PasswordContainer';
import { useState } from 'react';
import PasswordGenerator from './components/PasswordGenerator';

function App() {
	const [password, setPassword] = useState<string>('p4sSw0rd');
	return (
		<MantineProvider>
			<div
				id='App'
				className='bg-[#18171F] h-full w-full text-white flex flex-col justify-center items-center pr-5 pl-5'
			>
				<p>Password Generator</p>
				<PasswordContainer password={password} />
				<PasswordGenerator handlePassword={setPassword} />
			</div>
		</MantineProvider>
	);
}

export default App;

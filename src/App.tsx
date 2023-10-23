import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
	return (
		<MantineProvider>
			<div
				id='App'
				className='bg-black h-full text-white flex flex-col justify-center items-center'
			>
				<p>Password Generator </p>
				<p>Password Card with Copy Button</p>
				<p>Generator Card with Generate </p>
			</div>
		</MantineProvider>
	);
}

export default App;

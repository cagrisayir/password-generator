import '@mantine/core/styles.css';
import { Button } from '@mantine/core';

import { MantineProvider } from '@mantine/core';

function App() {
	return (
		<MantineProvider>
			<h1 className='text-3xl font-bold underline'>Hello</h1>
			<Button variant='filled' className='bg-red-300'>
				Button
			</Button>
			;
		</MantineProvider>
	);
}

export default App;

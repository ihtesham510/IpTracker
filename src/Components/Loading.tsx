import { Flex } from '@mantine/core'
import { GridLoader } from 'react-spinners'
const Spinner = () => {
	return (
		<>
			<Flex
				align='center'
				justify='center'
				h='400px'
			>
				<GridLoader
					color={'white'}
					size={30}
					aria-label='Loading Spinner'
					data-testid='loader'
				/>
			</Flex>
		</>
	)
}

export default Spinner

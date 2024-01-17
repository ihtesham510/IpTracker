import { Flex, Group, Text } from '@mantine/core'
import { BiSolidError } from 'react-icons/bi'

const Error = () => {
	return (
		<>
			<Flex
				h='200px'
				align='center'
				justify='center'
				direction='column'
			>
				<BiSolidError size='75px' />
				<Group
					align='center'
					justify='center'
				>
					<Text display='flex'>
						<Text style={{ color: 'red' }}>Error Code : 400 </Text>
						&nbsp;Invalid address or Server is not Responding
					</Text>
				</Group>
			</Flex>
		</>
	)
}

export default Error

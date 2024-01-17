import Header from '@Components/Header'
import Error from '@Components/Error'
import Loading from '@Components/Loading'
import useData from '@Hooks/useData'
import { ChangeEvent, useState } from 'react'
import { FaLocationCrosshairs, FaMapLocationDot } from 'react-icons/fa6'
import { Button, CloseButton, Container, Flex, Group, Input, Tooltip, em } from '@mantine/core'
import Tables from '@Components/Table'
import Map from '@Components/Map'
import { useMediaQuery } from '@mantine/hooks'
function App() {
	const { data, loading, error, getData, getCurrentIpAddress } = useData()
	const [ip, setIP] = useState<string>('')
	const [inputError, setInputError] = useState<boolean>(false)
	const isMedium = useMediaQuery(`(max-width: ${em(1250)})`)
	const isMobile = useMediaQuery(`(max-width: ${em(500)})`)
	const handleData = () => {
		if (!ip) {
			setInputError(true)
			return
		}
		getData(ip)
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputError(false)
		setIP(e.target.value)
	}
	return (
		<>
			<Header />
			<Flex
				justify='center'
				align='center'
				gap='xs'
				h='100px'
				my='sm'
			>
				<Group align='end'>
					{/* Input  */}
					<Input.Wrapper
						error={inputError ? 'Please Enter IP Address' : undefined}
						label='Enter IP Address'
					>
						<Input
							disabled={loading}
							type='text'
							onChange={handleChange}
							value={ip}
							size={isMobile ? 'sx' : 'md'}
							rightSectionPointerEvents='all'
							placeholder='192.168.1.1'
							aria-label='Please Enter some value'
							rightSection={
								<CloseButton
									aria-label='Clear Input'
									onClick={() => setIP('')}
									style={{ display: ip == '' ? 'none' : undefined }}
								/>
							}
						/>
					</Input.Wrapper>
					<Button
						onClick={handleData}
						size={isMobile ? 'sx' : 'md'}
					>
						<FaMapLocationDot style={{ fontSize: '20px' }} />
					</Button>
					<Tooltip
						withArrow
						transitionProps={{ duration: 200 }}
						label='Use Current IP Address'
					>
						<Button
							onClick={() => getCurrentIpAddress()}
							size={isMobile ? 'sx' : 'md'}
						>
							<FaLocationCrosshairs style={{ fontSize: '20px' }} />
						</Button>
					</Tooltip>
				</Group>
			</Flex>
			{error && <Error />}
			{loading && <Loading />}
			{!error && !loading && data && (
				<Flex
					direction={isMedium ? 'column' : undefined}
					justify='center'
					align='center'
				>
					<Container w={isMedium ? '100%' : '50%'}>
						<Tables {...data} />
					</Container>
					<Container
						w={isMedium ? '100%' : '50%'}
						h='100%'
					>
						<Map
							Longitude={data.longitude}
							Latitude={data.latitude}
						/>
					</Container>
				</Flex>
			)}
		</>
	)
}

export default App

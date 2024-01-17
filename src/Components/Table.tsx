import { Table } from '@mantine/core'
import { Data } from '@utils/interface'

const Tables = (data: Data) => {
	return (
		<>
			<Table
				withTableBorder
				width='100%'
				mr='xl'
			>
				<Table.Tbody>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>IP</Table.Th>
						<Table.Th>{data.ip}</Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Continent Code</Table.Th>
						<Table.Th>{data.continentCode} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Continent Name</Table.Th>
						<Table.Th>{data.continentName} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Country Code</Table.Th>
						<Table.Th>{data.countryCode} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Country Name</Table.Th>
						<Table.Th>{data.countryName} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Official Country Name</Table.Th>
						<Table.Th>{data.officialCountryName} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Region Code</Table.Th>
						<Table.Th>{data.regionCode} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Region Name</Table.Th>
						<Table.Th>{data.regionName} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>City Geo Id</Table.Th>
						<Table.Th>{data.cityGeoNameId} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>City</Table.Th>
						<Table.Th>{data.city}</Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Postal Code</Table.Th>
						<Table.Th>{data.postalCode} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Latitude</Table.Th>
						<Table.Th>{data.latitude.toString()}</Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Longitude</Table.Th>
						<Table.Th>{data.longitude.toString()}</Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Capital</Table.Th>
						<Table.Th>{data.capital}</Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Phone Code</Table.Th>
						<Table.Th>{data.phoneCode} </Table.Th>
					</Table.Tr>
					<Table.Tr>
						<Table.Th style={{ fontSize: '16px', fontWeight: 'bold' }}>Country Emoji</Table.Th>
						<Table.Th>{data.countryFlagEmoj} </Table.Th>
					</Table.Tr>
				</Table.Tbody>
			</Table>
		</>
	)
}

export default Tables

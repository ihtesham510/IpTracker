type Prop = {
	Longitude: number
	Latitude: number
}
import { Marker, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
// import 'leaflet/dist/leaflet.css'
const Map = ({ Longitude, Latitude }: Prop) => {
	return (
		<>
			<MapContainer
				center={[Latitude, Longitude]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ height: 635 }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={[Latitude, Longitude]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	)
}

export default Map

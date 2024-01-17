import { Data } from '@utils/interface'
import axios from 'axios'
import { useState } from 'react'

const useData = () => {
	const [error, setError] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const [data, setData] = useState<Data>()
	const key = '29379eda-37e0-4781-8929-cc22d994e409'
	async function getData(ip: string) {
		try {
			setError(false)
			setLoading(true)
			const res = await axios.get(`https://apiip.net/api/check?ip=${ip}&accessKey=${key}`)
			setData(res.data as Data)
		} catch (err) {
			setError(true)
		} finally {
			setLoading(false)
		}
	}
	async function getCurrentIpAddress() {
		const res = await axios.get('https://api.ipify.org')
		const ip = res.data
		getData(ip)
	}
	return { data, loading, error, getData, getCurrentIpAddress }
}

export default useData

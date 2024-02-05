import axios from 'axios'

const instance = axios.create({
  baseURL: `https://flowerr.cloud/api`,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY
  }
})

const vertical = await instance.get(`/v/${process.env.VERTICAL}`)

export const datum = async json => {
	let obj = {
		type: [{"target_id":"datum"}],
		title: [{"value": '_'}],
		field_json: [{"value": JSON.stringify(json)}],
		field_vertical: [{"target_id": vertical.data[0].nid[0]['value']}]
	}

	await instance.post('/node', obj)
}
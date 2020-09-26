import Axios from 'axios';

export async function getCall(url) {
    const res = await Axios.get(url)
    return res.data;
}

export async function getFakeLatencyCall(url) {
    const res = await Axios.get(url)
    await new Promise(resolve => setTimeout(resolve, 3000))
    return res.data;
}
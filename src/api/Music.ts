import {axios} from '../utils/request'
import {MUSIC_MODULE} from './_prefix'

type MusicInfo = {
    name: string,
    detail: string,
}

// 创建商店
export const createMusic = (storeInfo: MusicInfo) => {
    return axios.post(`${MUSIC_MODULE}/`, storeInfo,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            return res
        })
}

// 获取全部商店
export const getAllStore = () => {
    return axios.get(`${MUSIC_MODULE}/all`, )
        .then(res => {
            return res
        })
}

// 根据商店Id获取指定商店
export const getStoreById = (storeId: number) => {
    return axios.get(`${MUSIC_MODULE}/${storeId}`)
        .then(res => {
            return res
        })
}

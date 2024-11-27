import {axios} from '../utils/request'
import {MUSICLIST_MODULE} from './_prefix'

type ProductInfo = {
    storeId: number,
    name: string,
    category: string,
    price: number,
    photoUrlList: string[]
}

type SearchInfo = {
    name: string | null,
    category: string | null,
    price: number | null,      // 最高价格
}

// 创建商品
export const createProduct = (productInfo: ProductInfo) => {
    return axios.post(`${MUSICLIST_MODULE}/`, productInfo,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            return res
        })
}

// 获取商店下所有商品
export const getProductsByStoreId = (storeId: number) => {
    return axios.get(`${MUSICLIST_MODULE}/?storeId=${storeId}`)
        .then(res => {
            return res
        })
}

// 根据商品Id获取商品信息
export const getProductById = (productId: number) => {
    return axios.get(`${MUSICLIST_MODULE}/${productId}`)
        .then(res => {
            return res
        })
}

// 添加库存
export const addStock = (id: number, number: number) => {
    return axios.post(`${MUSICLIST_MODULE}/${id}/stock?number=${number}`)
        .then(res => {
            return res
        })
}

//根据商品Id获取商品评论
export const getCommentsById = (productId: number) => {
    return axios.get(`${MUSICLIST_MODULE}/comment/?productId=${productId}`)
        .then(res => {
            return res;
        })
}

export const searchByCondition = (searchInfo: SearchInfo) => {
    return axios.post(`${MUSICLIST_MODULE}/condition`, searchInfo,
        {headers: {'Content-Type': 'application/json'}})
        .then(res => {
            return res;
        })
}
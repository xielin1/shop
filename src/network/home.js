import { request } from "./request";
export function getHomeMultidata(){
    return request({
        url:'http://123.207.32.32:8000/home/multidata'
    })
}
export function getHomeGoods(type,page){
    return request({
        url:'http://127.0.0.1:4523/m1/2153968-0-default/home/data',
        params: {
            type,
            page
        }
    })
}
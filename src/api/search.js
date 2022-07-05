import request from "@/utils/request"

export const hotKey = () => {
    return request({
        url: '/search/hot'
    })
}

export const searchMusic = (params) => {
    return request({
        url: '/cloudsearch',
        params
    })
}
import request from "@/utils/request.js"

//封装推荐歌单函数
export const recommendMusic = (params)=>{
    // return返回一个Promise对象，这样就不会写死.then
    return request({
        url:'/personalized',
        params
    })
}

// 封装获取最新音乐接口
export const newMusic = (params)=>{
    return request({
        url:'/personalized/newsong',
        params
    })
}
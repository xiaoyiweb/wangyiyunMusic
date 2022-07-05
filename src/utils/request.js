import axios from 'axios'
// 设置基地址
// axios.defaults.baseURL = 'http://music.zllhyy.cn/'

// 相当于给axios克隆一套副本（也就是克隆了一个新的axios对象）
const request = axios.create({
    baseURL:'http://localhost:3000/'
})

export default request
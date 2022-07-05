<template>
  <div>
    <!-- 推荐歌单 -->
    <div>
      <div class="title">推荐歌单</div>

      <van-row gutter="20">
        <van-col v-for="item in recomList" :key="item.id" span="8">
          <van-image height="120" :src="item.picUrl" fit="cover" />
          <div class="song_name">{{ item.name }}</div>
        </van-col>
      </van-row>
    </div>

    <!-- 最新音乐 -->
    <div>
      <p class="title">最新音乐</p>
      <van-cell-group>
        <music-item
          :title="item.name"
          :label="item.song.artists[0].name + '-' + item.name"
          center
          v-for="item in newMuiscList"
          :key="item.id"
          :id="item.id"
        />
        <!-- <van-cell
          :title="item.name"
          :label="item.song.artists[0].name + '-' + item.name"
          center
          v-for="item in newMuiscList"
          :key="item.id"
        > -->
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <!-- <template #right-icon>
            <van-icon name="play-circle-o" size="25px" />
          </template>
        </van-cell> -->
      </van-cell-group>
    </div>
  </div>
</template>

<script>
// 导入接口
import { recommendMusicAPI, newMusicAPI } from "@/api";
export default {
  data() {
    return {
      recomList: "",
      newMuiscList: "",
    };
  },
  created() {
    // 获取歌单
    recommendMusicAPI({
      limit: 6,
    }).then((res) => {
      this.recomList = res.data.result;
    });

    // 获取最新音乐
    newMusicAPI({
      limit: 20,
    }).then((res) => {
      this.newMuiscList = res.data.result;
    });
  },
};
</script>

<style>
/* 标题 */
.title {
  padding: 10px 15px;
  margin: 0 0 15px 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 16px;
  padding: 0 5px;
  margin-bottom: 10px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
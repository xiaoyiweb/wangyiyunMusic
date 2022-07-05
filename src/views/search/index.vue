<template>
  <div>
    <!-- 搜索框 -->
    <van-search @input="search" v-model="key" placeholder="请输入搜索关键词" />

    <!-- 热门搜索 -->
    <div class="search_warp" v-if="!key">
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(item, index) in hotList"
          :key="index"
          @click="search(item.first)"
        >
          {{ item.first }}
        </span>
      </div>
    </div>
    <!-- 搜索结果 -->
    <div class="search_warp" v-else>
      <p class="hot_title">最佳匹配</p>
      <music-item
        v-for="item in searchMusic"
        :key="item.id"
        :title="item.name"
        :label="item.ar[0].name + '-' + item.name"
        :id="item.id"
      />
      <!-- <van-cell
        v-for="item in searchMusic"
        :key="item.id"
        :title="item.name"
        :label="item.ar[0].name + '-' + item.name"
      > -->
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <!-- <template #right-icon>
          <van-icon name="play-circle-o" size="25px" />
        </template>
      </van-cell> -->
    </div>
  </div>
</template>

<script>
import { hotKeyAPI, searchMusicAPI } from "@/api";

export default {
  data() {
    return {
      key: "",
      hotList: "",
      searchMusic: "",
      timer: "",
    };
  },

  methods: {
    search(val) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (val) {
          this.key = val;
        }
        searchMusicAPI({
          keywords: this.key,
        }).then((res) => {
          this.searchMusic = res.data.result.songs;
        });
      }, 300);
    },
  },

  created() {
    hotKeyAPI().then((res) => {
      this.hotList = res.data.result.hots;
    });
  },
};
</script>

<style>
/* 搜索容器的样式 */
.search_wrap {
  padding: 10px;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 16px;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 10px;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 20px;
  color: #333;
  border-color: #d3d4da;
  border-radius: 20px;
  border: 1px solid #d3d4da;
}
</style>
<template>
  <van-cell :title="title" :label="label">
    <!-- 使用 right-icon 插槽来自定义右侧图标 -->
    <template #right-icon>
      <van-icon
        @click="$router.push({ name: 'play', query: { id } })"
        name="play-circle-o"
        size="25px"
      />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: ["title", "label", "id"],
};
</script>

<style>
</style>
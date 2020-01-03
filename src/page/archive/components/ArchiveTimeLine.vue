<template>
  <div class="time-line">
    <TimeLineList v-for="(value, key) in TimeLineListData" :key="key" :year="key" :listData="value"></TimeLineList>
  </div>
</template>

<script>
import TimeLineList from "./TimeLineList";
export default {
  data() {
    return {
      blogs: []
    };
  },
  mounted() {
    this.getBlogJson();
  },
  computed: {
    TimeLineListData() {
      if (!this.blogs) return;
      // 为数据按年份分组
      let resObj = {}; // 最终返回的对象，格式 { 2019：[2019年的所有博客], 2020:[2020年的所有博客], ...}
      this.blogs.forEach(item => {
        let TimeLineYear = item.date.split("-")[0]; // 获取当前博客的年份
        if (!resObj[TimeLineYear]) {
          resObj[TimeLineYear] = [item]; // 如果没有当前属性新增一个并将当前元素存入数组并赋值
        }else{
          resObj[TimeLineYear].push(item)
        }
      });
      return resObj;
    }
  },
  methods: {
    getBlogJson() {
      this.axios.get("blog.json").then(this.getBlogJsonSucc);
    },
    getBlogJsonSucc(res) {
      res = res.data;
      if (res.ret) {
        this.blogs = res.data;
      }
    }
  },
  components: {
    TimeLineList
  }
};
</script>

<style lang="stylus" scoped>

.time-line
  width 100%
  display flex
  flex-direction column-reverse
</style>

<template>
  <div class="time-line-item">
    <router-link tag="div" :to="'/Archive/' + year" class="item-left">
      <span>{{ year }}</span>
    </router-link>
    <div class="item-content">
      <router-link
        class="time-line-list"
        :to="'/Archive/' + year + '/' + key"
        v-for="(value, key) in TimeLineListData"
        :key="key"
      >
        <div class="item-container border">
          <div class="item-content-month border-bottom">
            {{ key }}月 ({{ value.length }})
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfListData: []
    };
  },
  props: {
    listData: Array,
    year: String
  },
  mounted() {
    this.selfListData = this.listData;
  },
  computed: {
    TimeLineListData() {
      if (!this.selfListData) return;
      // 为数据按月份分组
      let resObj = {}; // 最终返回的对象，格式 { 1：[1月的所有博客], 2:[2月的所有博客], ...}
      this.selfListData.forEach(item => {
        let TimeLineYear = item.date.split("-")[1]; // 获取当前博客的月份
        if (!resObj[TimeLineYear]) {
          resObj[TimeLineYear] = [item]; // 如果没有当前属性新增一个并将当前元素存入数组并赋值
        } else {
          resObj[TimeLineYear].push(item);
        }
      });
      return resObj;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.time-line-item
    display flex
    margin-top .5rem
    .item-left
        min-width 10%
        border-right .06rem solid #ccc
        display flex
        align-items center
        justify-content center
        font-size .44rem
        color $themeColor
        cursor pointer
        padding-right .2rem
    .item-content
        flex 1
        display flex
        flex-wrap wrap
        .time-line-list
            min-width 25%
            padding .2rem .4rem
            box-sizing border-box
            .item-container
                text-align center
                box-shadow 0 0 .1rem #ccc
                font-size .40rem
                padding 0 .2rem
                &:hover
                    box-shadow inset 0 0 .1rem #ccc
                .item-content-month
                    padding .2rem 0
                    color $themeColor
                    cursor pointer
</style>

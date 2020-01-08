<template>
  <div class="log-info border-bottom">
    <div class="category-list">
      <div class="category-item">
        <icon-svg iconClass="Archive"></icon-svg>
        <category
          class="category"
          v-for="(category, index) in categories"
          :key="index"
          :category="category"
        ></category>
      </div>
    </div>
    <div class="tag-list">
      <tag
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
      ></tag>
    </div>
  </div>
</template>

<script>
import Tag from "common/Tag.vue";
import Category from "common/content-right/Category.vue";
import IconSvg from 'common/icon/IconSvg.vue'
export default {
  props: {
    tags:Array,
    categories:Array
  },
  components: {
    Tag,
    Category,
    IconSvg
  }
};
</script>

<style lang="stylus" scoped>
.log-info
    display flex
    width 100%
    justify-content space-between
    align-items center
    margin-bottom .5rem
    .category-list
        display flex
        justify-content center
        align-items center
        margin .4rem 0
        .category-item
            display flex
            justify-content center
            align-items center
            color #28a745
            border .02rem solid #28a745
            padding .1rem
            font-size .38rem
            &:hover
                background-color #28a745
                color #fff
            .category
                padding .1rem
                border none
                border-top none
                cursor pointer
    .tag-list
        display flex
        justify-content center
        align-items center
        .tag
            margin-top 0
</style>

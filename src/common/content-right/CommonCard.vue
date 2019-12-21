<template>
  <div class="card border">
    <card-title :header="card.header"></card-title>
    <div class="content">
      <template v-if="card.name === 'link'">
        <div v-for="(cardLink, index) in card.content" :key="index">
            <card-link 
          :link="cardLink"
        ></card-link>
        </div>
      </template>
      <template v-else-if="card.name === 'tags'">
          <div class="tag-list" >
              <tag v-for="(tag, index) in card.content" :key="index" :tag="tag"></tag>
          </div>
      </template>
      <template v-else>
          <div class="categories" >
              <category v-for="(category, index) in card.content" :key="index" :category="category"></category>
          </div>
      </template>
    </div>
  </div>
</template>

<script>
import CardTitle from "./CardTitle";
import CardLink from "./CardLink.vue";
import Tag from "./../Tag.vue";
import Category from "./Category"
export default {
  props: {
    card: Object
  },
  components: {
    CardTitle,
    CardLink,
    Tag,
    Category
  }
};
</script>

<style lang="stylus" scoped>
.card
    text-align center
    width 100%
    color #2c2c2c
    font-size .40rem
    margin-top .4rem
    .content
        width 100%
        .tag-list
            width 100%
            display flex
            flex-wrap wrap
            padding 0 .2rem .2rem .2rem
            position relative
</style>

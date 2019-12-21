<template>
  <div class="article-date">
    <div class="day">{{ day }}</div>
    <div class="month">{{ month }}</div>
  </div>
</template>

<script>
export default {
  props: {
    date: String
  },
  mounted() {
    this.dateArray = this.date.split("-");
  },
  data() {
    return {
      dateArray: []
    };
  },
  methods: {
    numberToChinese(num) {
      num = Number(num);
      var upperCaseNumber = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '万', '亿'];
      var length = String(num).length;
      if (length == 1) {
        return upperCaseNumber[num];
      } else if (length == 2) {
        if (num == 10) {
          return upperCaseNumber[num];
        } else if (num > 10 && num < 20) {
          return '十' + upperCaseNumber[String(num).charAt(1)];
        } else {
          return upperCaseNumber[String(num).charAt(0)] + '十' + upperCaseNumber[String(num).charAt(1)].replace('零', '');
        }
      }
    }
  },
  computed: {
    day() {
      return this.dateArray[2];
    },
    month() {
      return this.numberToChinese(this.dateArray[1]);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~styles/variable.styl"
.article-date
    display flex
    flex-direction column
    text-align center
    width 1rem
    font-weight 900
    @media (max-width : 720px)
      display none !important
    .day
        border .03rem solid $themeColor
        font-size .40rem
        padding .2rem 0
        color $themeColor
        box-sizing border-box
    .month
        box-sizing border-box
        padding .1rem 0
        font-size .34rem
        color #fff
        background-color $themeColor
</style>

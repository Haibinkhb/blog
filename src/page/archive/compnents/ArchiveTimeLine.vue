<template>
  <div class="time-line">
    <div>
        <div class="time-line-item">
            <div class="item-left"><span>2019</span></div>
            <div class="item-content">
                <div class="time-line-list">
                    <div class="item-container border">
                        <div class="item-content-month">12月</div>
                        <div>all posts (8)</div>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.time-line
  width 100%
  .time-line-item
    display flex
    margin-top .5rem
    .item-left
        width 10%
        border-right 1px solid #000
        display flex
        align-items center
        justify-content center
    .item-content
        flex 1
        display flex
        flex-wrap wrap
        .time-line-list
            width 33%
            padding .2rem
            box-sizing border-box
            
                
</style>
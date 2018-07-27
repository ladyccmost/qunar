<template>
  <div class="header">
    <div class="iconfont back">&#xe64e;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe617;</span>
      请输入搜索内容
    </div>
    <div class="city">乌鲁木齐</div>
  </div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #ffffff
    .back
      width: .58rem
      text-align: center
      font-size:.4rem
      font-weight: bold
    .search
      flex:1
      height:.6rem
      line-height: .6rem
      margin:.14rem .2rem
      background: #ffffff
      border-radius:.2rem
      color: #000
      .search-icon
        position: relative
        top:.02rem
        padding-left :.4rem
    .city
      padding-right:.6rem
      position relative
      &:before
        position absolute
        top: .28rem
        right: .1rem
        content:'\0020'
        width:0
        height :0
        border-left: .14rem solid transparent
        border-right:.14rem solid transparent
        border-top: .2rem solid #fff

</style>

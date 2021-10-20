<script>
import TabBarItem from './components/TabBarItem.vue'
import TabBar from './components/TabBar.vue'
export default{
  components:{
    'TabBar':TabBar,
    'TabBarItem':TabBarItem
  }
}

</script>

<template>
  <div>
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home" textColor='pink'>
        <template v-slot:item-img>
          <img src="./assets/img/imgs/tabBar/index.svg"/>
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/img/imgs/tabBar/index-selected.svg"/>
        </template>
        <template v-slot:item-title>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/course" textColor='yellow'>
        <template v-slot:item-img>
          <img src="./assets/img/imgs/tabBar/course.svg"/>
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/img/imgs/tabBar/course-selected.svg"/>
        </template>
        <template v-slot:item-title>
          <div>课程</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/friends" textColor='red'>
        <template v-slot:item-img>
          <img src="./assets/img/imgs/tabBar/friends.svg"/>
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/img/imgs/tabBar/friends-selected.svg"/>
        </template>
        <template v-slot:item-title>
          <div>朋友圈</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/study" textColor='green'>
        <template v-slot:item-img>
          <img src="./assets/img/imgs/tabBar/study.svg"/>
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/img/imgs/tabBar/study-selected.svg"/>
        </template>
        <template v-slot:item-title>
          <div>学习</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/my" textColor='blue'>
        <template v-slot:item-img>
          <img src="./assets/img/imgs/tabBar/my.svg"/>
        </template>
        <template v-slot:item-img-selected>
          <img src="./assets/img/imgs/tabBar/my-selected.svg"/>
        </template>
        <template v-slot:item-title>
          <div>我的</div>
        </template>
      </TabBarItem>

    </TabBar>
  </div>
</template>

<style>

/*底部bar样式 */
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  border-top: 1px solid #cccccc;
  display: flex; /*弹性伸缩盒显示 */
  background-color: #e6e6e6;
}
.tab-bar .tab-bar-item {
  flex: 1; /*均匀分布 */
  height: 49px; /*移动端的下部推荐设计高度 */
  display: flex;
  flex-direction: column; /*纵向布局 */
  justify-items: center; /*主轴居中 */
  align-items: center; /*侧轴居中 */
}
/*图标大小 */
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>

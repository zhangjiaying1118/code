
<template>
  <div class="tab-bar-item" @click="itemClick">
      <slot v-if="!isSelected" name="item-img"></slot>     
      <slot v-else name="item-img-selected"></slot>   
      <div :class="{selected:isSelected}">        
          <slot name="item-title"></slot>
      </div>  
    </div>
</template>
<script>
import {computed} from 'vue';
import { useRoute,useRouter} from 'vue-router';
export default {
  name:'TabBarItem',
  props:{
    path:String,
    textColor:{
      type:String,
      default:'red'
    }
  },
  setup(props){
    const router = useRouter();
    const itemClick = ()=>{      
      router.replace(props.path);
    };
    const route = useRoute();
    const isSelected = computed(()=>{
      return route.path.includes(props.path);
    });
    const selectedStyle = computed(()=>{
      return isSelected.value?{color:props.textColor}:{};
    });
    return {
      itemClick,
      isSelected,
      selectedStyle
    }
  },
}
</script>
<style>
.tab-bar-item {
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
.selected{
  color: red;
}
</style>


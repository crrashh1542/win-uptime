<script setup>
defineOptions({ name: 'WidgetTopNav' })
</script>

<template>
   <div class="nav flex font-bold my-3 text-lg">
      <slot>
         <!-- 
         expected eles: 1. span.w-icon-left
                        2. span.grow
                        3. span.w-icon-right
            -->
      </slot>
   </div>
</template>

<style lang="less">
@import url('@s/global.less');
.nav {
   margin: 0 .3em 10px;
   color: #666;

   span {
      font-size: var(--w-nav-size);
   }
   span.w-icon-left {
      float: left;
   }
   span.w-icon-left::before {
      margin-right: var(--w-nav-icon-spacing);
      font-size: calc(var(--w-nav-size) - 2px);
   }
   span.w-icon-right {
      float: right;
   }
   span.w-icon-right::after {
      margin-left: var(--w-nav-icon-spacing);
      font-size: calc(var(--w-nav-size) - 2px);
   }
}

// 响应式 ---- 移动端
@media screen and (max-width: 800px) {
   .nav {
      --w-nav-icon-spacing: .4em;
      --w-nav-size: 16px;
   }
}

// 响应式 ---- PC
@media screen and (min-width: 800px) {
   .nav {
      --w-nav-icon-spacing: .4em;
      --w-nav-size: 18px;
   }
}
</style>


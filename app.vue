<template>

  <div class="layout--wrapper">
    <the-header :top="navTop"></the-header>
    <NuxtPage @mousewheel="handleScroll($event)" />
    <the-footer></the-footer>
  </div>

</template>

<script setup>

const navTop = ref('var(--header-height--pc)')

const handleScroll = () =>{
  window.pageYOffset > 0 ? navTop.value = '0':navTop.value = 'var(--header-height--pc)'
}

onMounted(()=>{
  if(process.client){
    window.addEventListener('scroll', handleScroll)
  }
})

function debounce(func, delay = 1000, immediate = false){
  let timer = null
  return function(){
    if(timer){
      clearTimeout(timer)
      console.log('debounce')
    }

    if(immediate && !timer){
      func.apply(this, arguments)
    }
    
    timer = setTimeout(()=>{
      func.apply(this, arguments)
    }, delay)
  }
}
</script>

<style lang="scss">
@import '@/assets/css/scss/all.scss'
</style>


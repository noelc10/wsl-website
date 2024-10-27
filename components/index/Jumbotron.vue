<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div v-bind="$attrs">
    <div class="relative top-0 bottom-0 z-30 pt-24 pb-10">
      <slot />
    </div>

    <div id="spacer" :class="route.name === 'contact-us' || route.name === 'contact-us___kr' ? 'spacer-heighten' : 'spacer'"></div>
    
    <div class="absolute top-0 left-0 right-0 -z-[1]">
      <video class="relative object-cover w-screen h-screen opacity-75 transform-gpu 2xl:h-[100vh]" autoplay loop muted playsinline>
        <source
          src="@/assets/videos/homepage/jumbotron.mp4"
          type="video/mp4"
        />
      </video>
      <div class="relative inset-x-0 z-10 h-auto mx-auto my-auto bg-transparent">
        <div class="absolute -top-10 h-[50vh] 2xl:h-[calc(50vh-100px)] md:h-[calc(60vh-60px)] w-full bg-gradient-to-b from-transparent from-10% via-[#EEF2F6] via-40% to-[#EEF2F6] to-50% rounded-[100%]"></div>
        <div class="sm:flex absolute -top-10 h-[50vh] 2xl:h-[calc(50vh-100px)] md:[calc(60vh-60px)] w-full blur-md rounded-[0%] bg-gradient-to-t from-transparent from-10% via-[#EEF2F6] via-60% to-[#EEF2F6] to-40%"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.spacer) {
  width: 100vw;
  height: 100px;
  float: left;
}

:deep(.spacer-heighten) {
  width: 100vw;
  height: 350px;
  float: left;
}
</style>

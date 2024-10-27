<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <Jumbotron>
    <div class="my-20 flex flex-col mx-auto max-w-7xl w-11/12 text-center xl:my-48 2xl:my-56 3xl:my-64 4xl:my-64 5xl:my-80">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r inline-block from-primary to-secondary">
          {{ $t('Privacy Policy') }}
        </span>
      </div>
    </div>
  </Jumbotron>

  <div v-html="$t('privacy-policy-content')" class="container mx-auto mb-16 w-11/12 4xl:max-w-7xl 3xl:w-10/12"></div>
</template>

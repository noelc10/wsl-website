<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="relative origin-top-left">
    <div class="relative">
      <div class="mx-auto pt-40 pb-8 w-11/12 z-[1] 4xl:max-w-7xl 3xl:w-10/12">
        <div data-aos="fade-up" data-aos-duration="1000" class="px-8 py-4 card h-full bg-gradient-to-r from-[#B5C3D4]/75 to-[#D4E0EE]/75 border border-[#B9B9B9] rounded-lg xl:px-36 md:px-16">
          <div class="card-body py-4 text-center">
            <h2 class="card-title items-baseline mx-auto text-4xl" v-html="$t('contact-cta-title')"></h2>
            <p class="py-4 font-light" v-html="$t('contact-cta-description')"></p>
            <div class="card-actions mx-auto">
              <NuxtLink :to="localePath('/contact-us')"
                class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                {{ $t('Contact Us') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <video class="absolute top-0 -z-[1] object-cover w-full h-4/6" autoPlay loop muted playsInline>
        <source
          src="@/assets/videos/homepage/cta.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

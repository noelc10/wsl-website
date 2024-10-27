<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <footer class="mx-auto w-11/12 4xl:max-w-7xl 3xl:w-10/12">
    <div class="flex flex-col divide-y-2 divide-[#09264A]">
      <div></div>
      <div class="flex flex-col py-8 w-full md:flex-row">
        <div class="w-full md:w-2/5">
          <div class="card border-none p-0">
            <div class="card-body p-0 text-center md:text-left">
              <figure class="mb-4 md:align-left md:justify-start">
                <NuxtImg
                  preload
                  format="webp"
                  fit="outside"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  alt="WSoftLabs Logo"
                  src="/wsoftlabs_logo_transparent_footer.webp"
                />
              </figure>
              <p class="text-[#494949] text-sm font-light">
                {{ $t('footer-description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-col w-full md:w-3/5 md:flex-row md:mt-0">
          <div class="mt-8 px-4 w-full flex justify-center text-center md:mt-0 md:justify-end md:w-1/3 md:text-left">
            <div class="w-max">
              <h3 class="mb-8 text-lg font-bold leading-9">
                {{ $t('Company') }}
              </h3>
              <div>
                <ul class="list-none text-sm font-light">
                  <li class="my-2">
                    <NuxtLink :to="localePath('/')">{{ $t('Home') }}</NuxtLink>
                  </li>
                  <li class="my-2">
                    <NuxtLink :to="localePath('/about-us')">{{ $t('About Us') }}</NuxtLink>
                  </li>
                  <li class="my-2">
                    <NuxtLink :to="localePath('/services')">{{ $t('Services') }}</NuxtLink>
                  </li>
                  <li class="my-2">
                    <NuxtLink :to="localePath('/our-works')">{{ $t('Our Works') }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 px-4 w-full flex justify-center text-center md:mt-0 md:justify-end md:w-1/3 md:text-left">
            <div class="w-max">
              <h3 class="mb-8 text-lg font-bold leading-9">
                {{ $t('Get in Touch') }}
              </h3>
              <div>
                <ul class="list-none text-sm font-light">
                  <li class="my-2">
                    <NuxtLink :to="localePath('/contact-us')">{{ $t('Contact Us') }}</NuxtLink>
                  </li>
                  <li class="my-2">
                    <NuxtLink :to="localePath('/privacy-policy')">{{ $t('Privacy Policy') }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-8 px-4 w-full flex justify-center text-center md:mt-0 md:justify-end md:w-1/3 md:text-left">
            <div class="w-max">
              <h3 class="mb-8 text-lg font-bold leading-9">
                {{ $t('Connect with Us') }}
              </h3>
              <div>
                <ul class="flex flex-row justify-center list-none text-sm font-light md:justify-start">
                  <li class="mb-2 mr-1">
                    <NuxtLink :to="'https://www.facebook.com/wsoft.kr'" aria-label="Facebook">
                      <NuxtIcon filled name="footer/entypo-social_facebook" />
                    </NuxtLink>
                  </li>
                  <li class="mb-2 ml-1">
                    <NuxtLink :to="'https://www.instagram.com/wsoft.space/'" aria-label="Instagram">
                      <NuxtIcon filled name="footer/entypo-social_instagram" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.nuxt-icon {
  svg {
    width: 22px;
    height: 22px;
  }
}
</style>

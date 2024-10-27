<script setup lang="ts"></script>

<template>
  <Jumbotron>
    <div class="my-20 flex flex-col mx-auto max-w-7xl w-11/12 text-center xl:my-48 2xl:my-56 3xl:my-64 4xl:my-64 5xl:my-80">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="text-black">
          {{ $t('Services') }}
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" class="my-1 mx-auto px-8 w-10/12 text-sm font-light text-center xl:px-64 md:px-24">
        <p>
          {{ $t('services-description') }}
        </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center content-center mx-auto gap-8 max-w-7xl w-11/12 text-[#494949] lg:flex-row md:flex-col">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
        <div class="m-4 card-body min-h-[311px] bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-xl">
          <NuxtIcon filled class="services-icon" name="home/services/website-dev" />
          <h2
            v-html="$t('what-we-do-card-1-title')"
            class="card-title h-[58px] items-baseline"
          ></h2>
          <p class="text-sm font-light">{{ $t('what-we-do-card-1-description') }}</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
        <div class="m-4 card-body min-h-[311px] bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-xl">
          <NuxtIcon filled class="services-icon" name="home/services/web-app-dev" />
          <h2
            v-html="$t('what-we-do-card-2-title')"
            class="card-title h-[58px] items-baseline"
          ></h2>
          <p class="text-sm font-light">{{ $t('what-we-do-card-2-description') }}</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
        <div class="m-4 card-body min-h-[311px] bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-xl">
          <NuxtIcon filled class="services-icon" name="home/services/ui-design" />
          <h2
            v-html="$t('what-we-do-card-3-title')"
            class="card-title h-[58px] items-baseline"
          ></h2>
          <p class="text-sm font-light">{{ $t('what-we-do-card-3-description') }}</p>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
        <div class="m-4 card-body min-h-[311px] bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-xl">
          <NuxtIcon filled class="services-icon" name="home/services/ai-utils-service" />
          <h2
            v-html="$t('what-we-do-card-4-title')"
            class="card-title h-[58px] items-baseline"
          ></h2>
          <p class="text-sm font-light">{{ $t('what-we-do-card-4-description') }}</p>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
        <div class="m-4 card-body min-h-[311px] bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] rounded-xl">
          <NuxtIcon filled class="services-icon" name="home/services/maintenance" />
          <h2 class="card-title h-[58px] items-baseline">
            {{ $t('what-we-do-card-5-title') }}
          </h2>
          <p class="text-sm font-light">{{ $t('what-we-do-card-5-description') }}</p>
        </div>
      </div>
    </div>
  </Jumbotron>

  <div class="bg-gradient-to-r from-black to-black bg-opacity-10">
    <div class="py-16 w-full bg-[url('@/assets/images/homepage/services-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div class="mb-6 flex flex-col mx-auto max-w-7xl w-11/12 text-center text-white">
        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true" class="my-2 text-3xl font-bold">
          {{ $t('other-services-title') }}
        </h1>
      </div>
      
      <div class="grid grid-cols-1 gap-8 justify-around content-center align-center mx-auto max-w-7xl w-11/12 text-[#494949] xl:justify-between xl:content-between lg:flex-nowrap lg:flex-row md:flex-col lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-1-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-1-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-2-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-2-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl lg:min-h-auto">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-3-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-3-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl lg:min-h-auto">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-4-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-4-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl lg:min-h-auto">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-5-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-5-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-6-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-6-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-7-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-7-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card min-w-full min-h-auto border border-[#494949] rounded-2xl">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_#2473E9_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('other-services-card-8-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('other-services-card-8-description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ContactUsCtaSection />
</template>

<style scoped lang="scss">
:deep(.nuxt-icon.services-icon) {
  height: 65px;
  width: 65px;

  svg {
    height: 65px;
    width: 65px;
  }
}
</style>

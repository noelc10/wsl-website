<script setup lang="ts"></script>

<template>
  <Jumbotron>
    <div class="my-20 flex flex-col mx-auto max-w-7xl w-11/12 text-center xl:my-48 2xl:my-56 3xl:my-64 4xl:my-64 5xl:my-80">
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="text-black">
          {{ $t('About Us') }}
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 mx-auto px-8 w-10/12 text-sm font-light text-center xl:px-64 md:px-24">
        <p v-html="$t('about-us-description')"></p>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center content-center mx-auto gap-8 max-w-7xl w-11/12 text-[#494949] xl:flex-row">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial w-full min-h-auto border border-[#494949] rounded-2xl xl:w-6/12">
        <div class="m-4 p-0 card-body bg-[#A9D6E9] rounded-xl">
          <video class="relative object-cover w-full h-full transform-gpu rounded-xl" autoplay loop muted playsinline>
            <source
              src="@/assets/videos/about-us/about-page.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="card flex-initial w-full min-h-auto xl:w-6/12">
        <div class="m-4 card-body">
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="mb-4 text-2xl font-bold">
            <span class="bg-clip-text text-transparent bg-gradient-to-r inline-block from-primary to-secondary" v-html="$t('about-us-details-title')"></span>
          </div>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="text-sm font-light" v-html="$t('about-us-details-description')"></p>
        </div>
      </div>
    </div>
  </Jumbotron>

  <TechStackMarquee />

  <div class="bg-gradient-to-r from-primary to-secondary bg-opacity-10">
    <div class="py-16 w-full bg-[url('@/assets/images/homepage/services-bg.webp')] bg-cover bg-center bg-no-repeat">
      <div class="mb-6 flex flex-col mx-auto max-w-7xl w-11/12 text-center text-white">
        <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-2 text-3xl font-bold">
          {{ $t('why-choose-us-title') }}
        </h1>
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" class="my-4 mx-auto w-9/12 text-base font-light">
          {{ $t('why-choose-us-description') }}
        </div>
      </div>
      
      <div class="flex flex-wrap justify-center content-center mx-auto gap-8 max-w-7xl w-11/12 text-[#494949] xl:justify-between xl:content-between lg:flex-nowrap lg:flex-row md:flex-col">
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial min-w-full min-h-full border border-[#494949] rounded-2xl lg:min-w-[21vw] lg:min-h-[251px]">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_rgba(36,_115,_233,_0.48)_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('why-choose-us-card-1-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('why-choose-us-card-1-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial min-w-full min-h-full border border-[#494949] rounded-2xl lg:min-w-[21vw] lg:min-h-[251px]">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_rgba(36,_115,_233,_0.48)_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('why-choose-us-card-2-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('why-choose-us-card-2-description') }}
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card flex-initial min-w-full min-h-full border border-[#494949] rounded-2xl lg:min-w-[21vw] lg:min-h-[251px]">
          <div class="m-4 card-body bg-[linear-gradient(360deg,_rgba(3,_200,_208,_0)_0%,_rgba(36,_115,_233,_0.48)_135.47%)] rounded-xl border border-[#494949B2] text-white">
            <h2 class="card-title items-baseline">
              {{ $t('why-choose-us-card-3-title') }}
            </h2>
            <p class="text-sm font-light">
              {{ $t('why-choose-us-card-3-description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto py-20 max-w-7xl w-11/12">
    <div class="mt-4 mb-12 flex flex-col mx-auto max-w-7xl w-11/12 text-center">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="bg-clip-text text-transparent bg-gradient-to-r inline-block from-primary to-secondary">
          {{ $t('Our Team') }}
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" class="my-4 mx-auto w-9/12 text-base font-light">
        {{ $t('our-team-description') }}
      </div>
    </div>

    <div class="grid gap-8 grid-cols-1 justify-items-center content-center align-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/wonseok-jung.webp"
            alt="WonSeok Jung"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Matt
        </h4>
        <p class="mt-0 mb-2 font-semibold">WonSeok Jung</p>
        <span>{{ $t('CEO') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/kang-jun-lee.webp"
            alt="Kang Jun Lee"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Joseph
        </h4>
        <p class="mt-0 mb-2 font-semibold">Kang Jun Lee</p>
        <span>{{ $t('Senior Developer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/amron-florence-arda.webp"
            alt="Amron Florence Arda"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Jaimie
        </h4>
        <p class="mt-0 mb-2 font-semibold">Amron Florence Arda</p>
        <span>{{ $t('Project Officer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/benito-orbino.webp"
            alt="Benito Orbino"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Ben
        </h4>
        <p class="mt-0 mb-2 font-semibold">Benito Orbino</p>
        <span>{{ $t('Full Stack Developer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/jesus-lara.webp"
            alt="Jesus Lara"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Jes
        </h4>
        <p class="mt-0 mb-2 font-semibold">Jesus Lara</p>
        <span>{{ $t('Full Stack Developer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/noel-calonia.webp"
            alt="Noel Calonia"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Noel
        </h4>
        <p class="mt-0 mb-2 font-semibold">Noel Calonia</p>
        <span>{{ $t('Full Stack Developer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/jesmar-enad.webp"
            alt="Jesmar Enad"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Jesmar
        </h4>
        <p class="mt-0 mb-2 font-semibold">Jesmar Enad</p>
        <span>{{ $t('UI / UX Designer') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/leslie-palmos.webp"
            alt="Leslie Palmos"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Gale
        </h4>
        <p class="mt-0 mb-2 font-semibold">Leslie Palmos</p>
        <span>{{ $t('Human Resource Manager') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="lg:block mx-auto self-center text-center md:hidden"></div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/salvacion-parreno.webp"
            :alt="decodeURI('Salvacion Parreño')"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Salve
        </h4>
        <p class="mt-0 mb-2 font-semibold">Salvacion Parre<span>&ntilde;</span>o</p>
        <span>{{ $t('Corporate Secretary') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="mx-auto self-center text-center">
        <figure class="rounded-full">
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="mx-auto h-[258px] w-[258px]"
            src="/images/about-us/our-team/cristina-rula.webp"
            alt="Cristina Rula"
          />
        </figure>
        <h4 class="mt-2 text-lg font-bold">
          Cristina
        </h4>
        <p class="mt-0 mb-2 font-semibold">Cristina Rula</p>
        <span>{{ $t('Corporate Secretary') }}</span>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-mirror="true" class="lg:block mx-auto self-center text-center md:hidden"></div>
    </div>
  </div>

  <ContactUsCtaSection />
</template>

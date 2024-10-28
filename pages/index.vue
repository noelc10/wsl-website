<script setup lang="ts">
import NumberAnimation from 'vue-countup-v3'
import { useElementVisibility } from '@vueuse/core'

useHead({
  title: 'Home'
})

const localePath = useLocalePath()
const jumbotronContentRef = ref(null)
const jumbotronContentIsVisible = useElementVisibility(jumbotronContentRef)
</script>

<template>
  <div class="grid">
    <Jumbotron>
      <div class="mx-auto max-w-7xl w-11/12 py-32 2xl:py-40 4xl:py-72 5xl:py-80">
        <div ref="jumbotronContentRef" class="flex flex-col justify-center items-center text-center">
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 translate-y-2"
            mode="out-in"
          >
            <NuxtImg
              v-show="jumbotronContentIsVisible"
              width="637px"
              height="90px"
              class="w-auto h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))]"
              alt="jumbotron-title-1"
              src="/images/homepage/jumbotron-title-1.webp"
            />
          </Transition>
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 translate-y-2"
            mode="out-in"
          >
            <div
              v-show="jumbotronContentIsVisible"
              class="py-2 flex relative justify-center flex-col text-center overflow-hidden"
            >
              <div
                class="font-extrabold text-4xl sm:text-7xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                <span class="inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul class="block animate-text-slide-11 text-center leading-tight [&_li]:block">
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">기술의
                      미래를 선도</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">비즈니스를
                      스마트하게</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">데이터로
                      혁신</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">무한한
                      가능성을 창조</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">신뢰를 설계
                    </li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">인공지능으로
                      혁신</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">성장 엔진을
                      설계</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">가능성을
                      연결</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">데이터로
                      세상을 이해</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">업무 효율을
                      극대화</li>
                    <li class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">경험을 혁신
                    </li>
                    <li aria-hidden="true"
                      class="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">기술의 미래를
                      선도</li>
                  </ul>
                </span>
              </div>
            </div>
          </Transition>
          <Transition
            enter-active-class="transition-all duration-300"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100"
            leave-active-class="transition-all duration-300"
            leave-from-class="opacity-100 "
            leave-to-class="opacity-0 translate-y-2"
            mode="out-in"
          >
            <NuxtImg
              v-show="jumbotronContentIsVisible"
              format="webp"
              width="168px"
              height="90px"
              class="w-auto h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))]"
              alt="jumbotron-title-3"
              src="/images/homepage/jumbotron-title-3.webp"
            />
          </Transition>
          <p class="mt-6 px-8 lg:px-32 md:px-24 sm:px-16 text-lg font-normal leading-8 text-gray-600">
            {{ $t('home-description') }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="localePath('/about-us')"
              class="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {{ $t('Learn More') }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact-us')"
              class="group rounded-md px-3 py-2 transition ease-in-out delay-250 shadow-sm gradient-border-mask"
            >
              <span class="text-sm font-semibold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text group-hover:text-white">
                {{ $t('Contact Us') }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mx-auto py-0 max-w-7xl w-11/12">
        <div class="card border-[1px] rounded-[33px] shadow-lg z-10 bg-[#EEF2F6]">
          <div class="card-body rounded-[33px]">
            <div class="grid grid-flow-row justify-stretch divide-y text-center sm:grid-flow-col sm:divide-x sm:divide-y-0">
              <div class="py-[20px] flex-1/3">
                <div class="mb-4 text-3xl font-bold">
                  <NumberAnimation ref="projCompletedCount" :end-val="21" :duration="8" />
                </div>
                <div class="text-base font-light">{{ $t('Projects Completed') }}</div>
              </div>
              <div class="py-[20px] flex-1/3">
                <div class="mb-4 text-3xl font-bold">
                  <NumberAnimation ref="satisfiedClientsCount" :end-val="34" :duration="8" />
                </div>
                <div class="text-base font-light">{{ $t('Satisfied Clients') }}</div>
              </div>
              <div class="py-[20px] flex-1/3">
                <div class="mb-4 text-3xl font-bold">
                  <NumberAnimation ref="yrsExpCount" :end-val="13" :duration="8" />
                </div>
                <div class="text-base font-light">{{ $t('Years of Experience') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  
    <div class="inline-grid mx-auto py-0 max-w-full bg-[url('@/assets/images/homepage/about-us.webp')] bg-cover bg-center bg-no-repeat">
      <div class="mx-auto w-11/12 lg:w-full">
        <div class="grid lg:grid-cols-10">
          <div data-aos="fade-right" data-aos-duration="1000" class="row-span-1 col-span-12 lg:row-span-full lg:col-start-1 lg:col-span-7 self-center">
            <video
              autoplay
              loop  
              muted
              class="object-cover h-auto w-[100vw] xl:h-[90vh] xl:right-24 lg:object-right lg:h-[70vh] transform-gpu"
            >
              <source
                src="@/assets/videos/homepage/about-section-home.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" class="row-span-1 col-span-12 py-16 lg:py-0 lg:row-span-full lg:col-span-5 lg:col-end-12 self-center z-0">
            <div class="mb-2">
              <h4 class="text-sm font-semibold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
                {{ $t('About Us') }}
              </h4>
            </div>
            <div class="my-2">
              <h1 class="text-4xl font-semibold" v-html="$t('about-us-subtitle')"></h1>
            </div>
            <p class="my-4 pr-16 text-base font-light">
              {{ $t('about-us-description') }}
            </p>
            <NuxtLink
              :to="'/about-us'"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('Learn More') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-primary to-secondary bg-opacity-10">
      <div class="py-16 w-full bg-[url('@/assets/images/homepage/services-bg.webp')] bg-cover bg-center bg-no-repeat">
        <div class="mb-6 flex flex-col mx-auto max-w-7xl w-11/12 text-center text-white">
          <h6 data-aos="fade-down" data-aos-duration="1000" class="text-sm font-bold">
            {{ $t('What we do') }}
          </h6>
          <h1 data-aos="fade-down" data-aos-duration="1000" class="my-2 text-3xl text-black font-bold" v-html="$t('what-we-do-subtitle')"></h1>
          <div class="my-4 mx-auto w-9/12 text-base font-light" v-html="$t('what-we-do-description')"></div>
        </div>
        <div class="flex flex-wrap justify-center content-center mx-auto gap-8 max-w-7xl w-11/12 text-[#494949] lg:flex-row md:flex-col">
          <div data-aos="fade-right" data-aos-duration="1000" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
            <div class="m-4 card-body min-h-[311px] shadow-lg border-[#ADADADB2] bg-[linear-gradient(120.75deg,_#F6F9FC_0%,_#D4E5F5_100%)] rounded-xl">
              <NuxtIcon filled class="services-icon" name="home/services/website-dev" />
              <h2 class="card-title h-[58px] items-baseline" v-html="$t('what-we-do-card-1-title')"></h2>
              <p class="text-sm font-light">{{ $t('what-we-do-card-1-description') }}</p>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration="1000" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
            <div class="m-4 card-body min-h-[311px] shadow-lg border-[#ADADADB2] bg-[linear-gradient(120.75deg,_#F6F9FC_0%,_#D4E5F5_100%)] rounded-xl">
              <NuxtIcon filled class="services-icon" name="home/services/web-app-dev" />
              <h2 class="card-title h-[58px] items-baseline" v-html="$t('what-we-do-card-2-title')"></h2>
              <p class="text-sm font-light">{{ $t('what-we-do-card-2-description') }}</p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
            <div class="m-4 card-body min-h-[311px] shadow-lg border-[#ADADADB2] bg-[linear-gradient(120.75deg,_#F6F9FC_0%,_#D4E5F5_100%)] rounded-xl">
              <NuxtIcon filled class="services-icon" name="home/services/ui-design" />
              <h2 class="card-title h-[58px] items-baseline" v-html="$t('what-we-do-card-3-title')"></h2>
              <p class="text-sm font-light">{{ $t('what-we-do-card-3-description') }}</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
            <div class="m-4 card-body min-h-[311px] shadow-lg border-[#ADADADB2] bg-[linear-gradient(120.75deg,_#F6F9FC_0%,_#D4E5F5_100%)] rounded-xl">
              <NuxtIcon filled class="services-icon" name="home/services/ai-utils-service" />
              <h2 class="card-title h-[58px] items-baseline" v-html="$t('what-we-do-card-4-title')"></h2>
              <p class="text-sm font-light">{{ $t('what-we-do-card-4-description') }}</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" class="card flex-initial w-[378px] min-h-[361px] border border-[#E1EDF8] rounded-2xl">
            <div class="m-4 card-body min-h-[311px] shadow-lg border-[#ADADADB2] bg-[linear-gradient(120.75deg,_#F6F9FC_0%,_#D4E5F5_100%)] rounded-xl">
              <NuxtIcon filled class="services-icon" name="home/services/maintenance" />
              <h2 class="card-title h-[58px] items-baseline">
                {{ $t('what-we-do-card-5-title') }}
              </h2>
              <p class="text-sm font-light">
                {{ $t('what-we-do-card-5-description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-center content-center mx-auto mt-12 mb-8">
          <NuxtLink :to="localePath('/services')"
            class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            {{ $t('View More Services') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <TechStackMarquee />

    <div class="relative origin-top-left">
      <div class="relative">
        <div class="z-[1] pt-20 pb-10">
          <div class="mb-6 flex flex-col mx-auto text-center">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="my-1 text-sm font-bold"
            >
              <span class="bg-clip-text text-transparent bg-gradient-to-r inline-block from-primary to-secondary">
                {{ $t('Our work') }}
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="my-1 text-3xl font-bold"
            >
              <span v-html="$t('our-work-subtitle')"></span>
            </div>
          </div>
  
          <div class="grid gap-x-5 gap-y-5 grid-cols-1 content-evenly place-content-evenly justify-evenly place-items-center mx-auto max-w-7xl w-11/12 text-[#494949] lg:grid-cols-3 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-1-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/academic-administration-management-system/academic-administration-management-system-v3.webp"
                  alt="Our Works - Academic Administration Management System"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/academic-administration-management-system')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-2-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/content-management-system/content-management-system-v3.webp"
                  alt="Our Works - Content Management System"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/content-management-system')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-3-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/youtube-content-learning-system/youtube-content-learning-system-v3.webp"
                  alt="Our Works - Youtube Content Learning System"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/youtube-content-learning-system')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-4-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/foreign-language-learning-system/foreign-language-learning-system-v3.webp"
                  alt="Our Works - Foreign Language Learning System"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/foreign-language-learning-system')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-5-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/project-management-system/project-management-system-v3.webp"
                  alt="Our Works - Project Management System"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/project-management-system')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              class="card h-full w-full bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl"
            >
              <div class="card-body py-4">
                <h2 class="card-title min-h-[58px] items-baseline" v-html="$t('our-work-card-6-title')"></h2>
              </div>
              <figure>
                <NuxtImg
                  preload
                  format="webp"
                  width="100dvw"
                  height="100dvh"
                  loading="lazy"
                  class="w-full"
                  src="/images/our-works/ai-review-analyzer/ai-review-analyzer-v3.webp"
                  alt="Our Works - AI Review Analyzer"
                />
              </figure>
              <div class="card-body py-4">
                <div class="card-actions left-0">
                  <NuxtLink :to="localePath('/our-works/ai-review-analyzer')"
                    class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    {{ $t('View Project') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center content-center mx-auto mt-12 mb-6">
            <NuxtLink :to="localePath('/our-works')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {{ $t('See More Projects') }}
            </NuxtLink>
          </div>
        </div>

        <video class="absolute top-0 -z-[1] object-cover w-full h-full opacity-5" autoPlay loop muted playsInline>
          <source
            src="@/assets/videos/homepage/our-works.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>

    <ContactUsCtaSection />
  </div>
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

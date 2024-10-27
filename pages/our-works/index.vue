<script setup>
const localePath = useLocalePath()
</script>

<template>
  <Jumbotron class="pb-48">
    <div class="my-20 flex flex-col mx-auto max-w-7xl w-11/12 text-center xl:my-48 2xl:my-56 3xl:my-64 4xl:my-64 5xl:my-80">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="text-black">
          {{ $t('Our Works') }}
        </span>
      </div>
    </div>
    <div class="grid gap-x-5 gap-y-5 grid-cols-1 content-evenly place-content-evenly justify-evenly place-items-center mx-auto max-w-7xl w-11/12 text-[#494949] lg:grid-cols-3 md:grid-cols-2 md:place-items-center">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-1-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/academic-administration-management-system/academic-administration-management-system-v3.webp"
            alt="Our Works - Academic Administration Management System"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/academic-administration-management-system')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-2-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/content-management-system/content-management-system-v3.webp"
            alt="Our Works - Content Management System"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/content-management-system')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-3-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/youtube-content-learning-system/youtube-content-learning-system-v3.webp"
            alt="Our Works - Youtube Content Learning System"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/youtube-content-learning-system')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-4-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/foreign-language-learning-system/foreign-language-learning-system-v3.webp"
            alt="Our Works - Foreign Language Learning System"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/foreign-language-learning-system')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-5-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/project-management-system/project-management-system.webp"
            alt="Our Works - Project Management System"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/project-management-system')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-6-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/ai-review-analyzer/ai-review-analyzer-v3.webp"
            alt="Our Works - AI Review Analyzer"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/ai-review-analyzer')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-7-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/ai-tarot-master/ai-tarot-master-v3.webp"
            alt="Our Works - AI Tarot Master"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/ai-tarot-master')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-8-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/data-crawling/data-crawling-v3.webp"
            alt="Our Works - Data Crawling"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/data-crawling')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl lg:col-auto lg:w-full md:w-full">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-9-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/dimple/dimple-v3.webp"
            alt="Our Works - Dimple"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/dimple')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="card h-full w-full col-auto bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] border border-[#B9B9B9] rounded-2xl lg:col-start-2 lg:w-full md:w-full">
        <div class="card-body py-4">
          <h2
            v-html="$t('our-work-card-10-title')"
            class="card-title min-h-[58px] items-baseline"
          >
          </h2>
        </div>
        <figure>
          <NuxtImg
            preload
            format="webp"
            fit="outside"
            width="100dvw"
            height="100dvh"
            loading="lazy"
            class="w-[100dvw]"
            src="/images/our-works/kokotalk/kokotalk-v3.webp"
            alt="Our Works - Kokotalk"
          />
        </figure>
        <div class="card-body py-4">
          <div class="card-actions left-0">
            <NuxtLink
              external
              :to="localePath('/our-works/kokotalk')"
              class="inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {{ $t('View Project') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Jumbotron>

  <div class="mx-auto 4xl:max-w-7xl w-screen">
    <div style='position: relative; width: 100%; height: 0; padding-top: 56.25%; overflow: hidden; will-change: transform;'>
      <iframe loading='lazy' style='position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0; margin: 0;' src='https:&#x2F;&#x2F;www.miricanvas.com&#x2F;v&#x2F;13pg4ii?embed'>
      </iframe>
    </div>
  </div>
  
  <ContactUsCtaSection />
</template>

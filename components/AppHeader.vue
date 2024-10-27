<script setup lang="ts">
const { setLocale } = useI18n()
const localePath = useLocalePath()

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about-us' },
  { name: 'Services', to: '/services' },
  { name: 'Our Works', to: '/our-works' },
]

function openModal () {
  smMdModal.showModal()
}

function closeModal () {
  smMdModal.close()
}
</script>

<template>
  <header class="bg-white">
    <div class="absolute inset-x-0 top-0 z-50 mx-auto justify-items-center w-11/12 4xl:max-w-7xl 3xl:w-10/12">
      <nav class="flex items-center justify-between py-6" aria-label="Global">
        <div class="flex lg:flex-1">
          <NuxtLink :to="'/'" class="-m-1.5 p-1.5" aria-label="WSoftLabs Website Logo">
            <span class="sr-only">WSoftLabs</span>
            <NuxtImg
              preload
              format="webp"
              fit="outside"
              width="100dvw"
              height="100dvh"
              loading="lazy"
              class="h-16 w-auto"
              src="/wsoftlabs_logo_transparent_new_v3.webp"
              alt="Logo"
            />
          </NuxtLink>
        </div>
        <div class="flex lg:hidden">
          <button @click="openModal()" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <span class="i-[heroicons--bars-3] h-6 w-6" aria-hidden="true"></span>
          </button>
        </div>
        <div class="hidden lg:flex lg:justify-end lg:items-center lg:gap-x-12">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="localePath(item.to)" @click="closeModal" class="text-sm font-semibold leading-6 text-gray-900">{{ $t(item.name) }}</NuxtLink>
          <NuxtLink class="rounded-md px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" :to="localePath('/contact-us')" @click="closeModal">{{ $t('Free Consultation') }}</NuxtLink>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="rounded-md px-3.5 py-2.5 text-sm text-white font-semibold shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <span class="text-xl i-[heroicons--language]"></span>
            </div>
            <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <button @click="setLocale('en')" class="btn btn-link btn-sm no-underline no-animation">{{ $t('English') }}</button>
              </li>
              <li>
                <button @click="setLocale('kr')" class="btn btn-link btn-sm no-underline no-animation">{{ $t('Korean') }}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <dialog id="smMdModal" class="modal lg:hidden bg-transparent">
        <div class="modal-box rounded-none w-full max-w-full h-screen max-h-screen backdrop-blur bg-gradient-to-r from-primary/75 to-secondary/75">
          <div class="mt-0 mb-4 modal-action">
            <form method="dialog">
              <!-- if there is a button, it will close the modal -->
              <button class="btn btn-ghost" aria-label="Mobile Screen Nav Menu close button">
                <span class="text-xl i-[heroicons--x-mark]"></span>
              </button>
            </form>
          </div>
          <div class="w-full h-5/6">
            <div class="flex flex-col justify-evenly h-full items-center text-center">
              <NuxtLink v-for="item in navigation" :key="item.name" :to="localePath(item.to)" @click="closeModal" class="text-2xl font-semibold leading-6 text-gray-900">{{ $t(item.name) }}</NuxtLink>
              <NuxtLink class="rounded-md px-3.5 py-2.5 text-2xl text-white font-semibold shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" :to="localePath('/contact-us')" @click="closeModal">{{ $t('Free Consultation') }}</NuxtLink>
              <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="rounded-md px-3.5 py-2.5 text-2xl text-white font-semibold shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Translation Selection button">
                  <span class="text-xl i-[heroicons--language]"></span>
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <button @click="setLocale('en')" class="btn btn-link btn-sm no-underline no-animation">{{ $t('English') }}</button>
                  </li>
                  <li>
                    <button @click="setLocale('kr')" class="btn btn-link btn-sm no-underline no-animation">{{ $t('Korean') }}</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </header>
</template>

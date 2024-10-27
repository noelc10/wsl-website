<template>
  <Jumbotron>
    <div class="mt-12 mb-5 flex flex-col mx-auto max-w-7xl w-11/12 text-center xl:mt-32 2xl:mt-40 3xl:mt-48 4xl:mt-48 5xl:mt-64">
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-mirror="true" class="my-1 text-3xl font-bold">
        <span class="text-black">
          {{ $t('contact-us-title') }}
        </span>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true" class="my-1 mx-auto px-8 max-w-7xl w-11/12 text-sm text-center font-light xl:px-60 md:px-24">
        <p>
          {{ $t('contact-us-description') }}
        </p>
      </div>
    </div>

    <div class="mt-10 mx-auto flex flex-col max-w-7xl w-11/12 lg:flex-row">
      <ContactUsForm />

      <div class="mt-8 mx-auto w-4/12 lg:mt-0 lg:mx-12 lg:w-2/12">
        <div class="mx-auto grid grid-cols-1 gap-y-6">
          <div class="cols-span-full">
            <NuxtIcon filled class="w-[56px] h-[56px] contact-icon" name="contact-us/call-us" />
            <h5 class="mt-2 text-base font-bold">{{ $t('Call Us') }}</h5>
            <span class="text-sm font-light">010 5067 8800</span>
          </div>
          <div class="cols-span-full">
            <NuxtIcon filled class="w-[56px] h-[56px] contact-icon" name="contact-us/email-us" />
            <h5 class="mt-2 text-base font-bold">{{ $t('Email Us') }}</h5>
            <span class="text-sm font-light">uedu.dev@gmail.com</span>
          </div>
          <div class="cols-span-full">
            <NuxtIcon filled class="w-[56px] h-[56px] contact-icon" name="contact-us/our-office" />
            <h5 class="mt-2 text-base font-bold">{{ $t('Our Office') }}</h5>
            <span class="text-sm font-light">
              {{ $t('office-address') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Jumbotron>
</template>

<style scoped lang="scss">
:deep(.nuxt-icon.contact-icon) {
  height: 56px;
  width: 56px;

  svg {
    height: 56px;
    width: 56px;
  }
}
</style>

<script setup>
const {
  errors,
  fullName, fullNameAttrs,
  email, emailAttrs,
  phoneNumber, phoneNumberAttrs,
  company, companyAttrs,
  message, messageAttrs,
  loading,
  submitDisabled,
  submitEmail
} = useContactUs()
</script>

<template>
  <vee-form ref="contactUsForm" @submit="submitEmail" class="mb-4 w-full lg:mb-0 lg:w-10/12">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-6">
      <div class="form-control col-span-full md:col-span-3">
        <label :class="errors.fullName ? 'text-error': 'text-gray-900'" for="fullName" class="block text-sm font-light leading-6">{{ $t('Full Name') }}</label>
        <div class="mt-2">
          <vee-field v-model="fullName" v-bind="fullNameAttrs" :validate-on-input="true" :disabled="loading" :class="errors.fullName ? 'input-error focus:ring-error' : 'focus:ring-primary'" autocomplete type="text" name="fullName" id="fullName" class="input input-bordered w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6" />
          <div v-show="errors.fullName" class="block text-sm font-light text-error">
            {{ errors.fullName }}
          </div>
        </div>
      </div>

      <div class="form-control col-span-full md:col-span-3">
        <label :class="errors.email ? 'text-error': 'text-gray-900'" for="email" class="block text-sm font-light leading-6">{{ $t('Email Address') }}</label>
        <div class="mt-2">
          <vee-field v-model="email" v-bind="emailAttrs" :validate-on-input="true" :disabled="loading" :class="errors.email ? 'input-error focus:ring-error' : 'focus:ring-primary'" autocomplete id="email" name="email" type="email" class="input input-bordered w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6" />
          <div v-show="errors.email" class="block text-sm font-light text-error">
            {{ errors.email }}
          </div>
        </div>
      </div>

      <div class="form-control col-span-full md:col-span-3">
        <label :class="errors.phoneNumber ? 'text-error': 'text-gray-900'" for="phoneNumber" class="block text-sm font-light leading-6">{{ $t('Phone Number') }}</label>
        <div class="mt-2">
          <vee-field v-model="phoneNumber" v-bind="phoneNumberAttrs" :validate-on-input="true" :disabled="loading" :class="errors.phoneNumber ? 'input-error focus:ring-error' : 'focus:ring-primary'" autocomplete type="text" name="phoneNumber" id="phoneNumber" class="input input-bordered w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6" />
          <div v-show="errors.phoneNumber" class="block text-sm font-light text-error">
            {{ errors.phoneNumber }}
          </div>
        </div>
      </div>

      <div class="form-control col-span-full md:col-span-3">
        <label :class="errors.company ? 'text-error': 'text-gray-900'" for="company" class="block text-sm font-light leading-6">{{ $t('Company') }}</label>
        <div class="mt-2">
          <vee-field v-model="company" v-bind="companyAttrs" :validate-on-input="true" :disabled="loading" :class="errors.company ? 'input-error focus:ring-error' : 'focus:ring-primary'" autocomplete type="text" name="company" id="company" class="input input-bordered w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6" />
          <div v-show="errors.company" class="block text-sm font-light text-error">
            {{ errors.company }}
          </div>
        </div>
      </div>

      <div class="col-span-full">
        <label :class="errors.message ? 'text-error': 'text-gray-900'" for="message" class="block text-sm font-light leading-6">{{ $t('Message') }}</label>
        <div class="mt-2">
          <vee-field v-model="message" v-bind="messageAttrs" :validate-on-input="true" :disabled="loading" :class="errors.message ? 'input-error focus:ring-error' : 'focus:ring-primary'" as="textarea" id="message" name="message" rows="3" class="textarea textarea-bordered w-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6" />
          <div v-show="errors.message" class="block text-sm font-light text-error">
            {{ errors.message }}
          </div>
        </div>
      </div>

      <div class="col-span-full">
        <div class="mt-2">
          <button :disabled="submitDisabled" type="submit" class="inline-flex rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 bg-gradient-to-r from-primary via-secondary to-primary bg-[size:_200%] bg-[position:_0%_0%] hover:bg-[position:_100%_100%] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-primary disabled:from-blue-400 disabled:via-cyan-200 disabled:to-blue-400">
            <span v-show="loading">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ loading ? $t('Sending...') : $t('Send Message') }}
          </button>
        </div>
      </div>
    </div>
  </vee-form>
</template>

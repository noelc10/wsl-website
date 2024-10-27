<script setup></script>

<template>
  <div class="relative mb-4">
    <div class="my-4 mx-auto w-11/12 text-center">
      <h1 class="text-lg font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text">
        {{ $t('Our Tech Stacks') }}
      </h1>
    </div>
    <div class="relative w-screen">
      <NuxtMarquee :autoFill="true" class="transform-gpu">
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_html5" />
          <span>HTML 5</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_css3" />
          <span>CSS3</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_javascript" />
          <span>JavaScript</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_vuejs" />
          <span>Vue</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_nodejs" />
          <span>NodeJS</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_apache" />
          <span>Apache</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_github" />
          <span>GitHub</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_mysql" />
          <span>MySql</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_laravel" />
          <span>Laravel</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/logos_shopify" />
          <span>Shopify</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_wordpress" />
          <span>Wordpress</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_bitbucket" />
          <span>BitBucket</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_aws" />
          <span>AWS</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_docker" />
          <span>Docker</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_bootstrap" />
          <span>Bootstrap</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_mongodb" />
          <span>MongoDB</span>
        </div>
      </NuxtMarquee>
      <NuxtMarquee :autoFill="true" direction="right" class="transform-gpu">
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_php" />
          <span>PHPUnit</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_digitalocean" />
          <span>DigitalOcean</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_photoshop" />
          <span>Photoshop</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_figma" />
          <span>Figma</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/skill-icons_illustrator" />
          <span>Illustrator</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/logos_google-drive" />
          <span>Google Drive</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/logos_google-analytics" />
          <span>Google Analytics</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_jira" />
          <span>Jira</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_slack" />
          <span>Slack</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/arcticons_openai-chatgpt" />
          <span>ChatGPT</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/uxwing_runway-ai" />
          <span>Runway AI</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_vuetify" />
          <span>Vuetify</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_python" />
          <span>Python</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_flutter" />
          <span>Flutter</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/logos_electron" />
          <span>Electron</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/logos_pwa" />
          <span>PWA</span>
        </div>
        <div class="mx-2 my-2 px-4 py-5 badge badge-lg border-none bg-gradient-to-r from-[#F6F9FC] to-[#D4E5F5] shadow-md font-light">
          <NuxtIcon filled class="mr-1 tech-stack-icon" name="home/devtools/devicon_flask" />
          <span>Flask</span>
        </div>
      </NuxtMarquee>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.nuxt-icon.tech-stack-icon) {
  height: 24px !important;
  width: 24px !important;

  svg {
    height: 24px !important;
    width: 24px !important;
  }
}
</style>

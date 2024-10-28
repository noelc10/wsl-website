<template>
  <ClientOnly>
    <div class="app-container break-keep">
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <NuxtSnackbar />
    </div>
  </ClientOnly>
</template>

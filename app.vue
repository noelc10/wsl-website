<template>
  <div class="app-container break-keep">
    <NuxtLoadingIndicator />
    <ClientOnly>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </ClientOnly>
    <NuxtSnackbar />
  </div>
</template>

<template>
  <div class="app-container break-keep">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </NuxtLayout>
    <NuxtSnackbar />
  </div>
</template>

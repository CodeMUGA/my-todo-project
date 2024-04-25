// pasar a componente
<template>
  <header>
    <div class="wrapper">
      <nav class="flex min-h-full flex-row justify-center px-6">
        <RouterLink to="/" class="px-6 pt-6">Home</RouterLink>
        <RouterLink to="/about" class="px-6 pt-6">About</RouterLink>
        <RouterLink to="/signin" class="px-6 pt-6">Sign In</RouterLink>
        <RouterLink to="/register" class="px-6 pt-6">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
